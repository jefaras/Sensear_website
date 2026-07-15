#!/usr/bin/env node
/**
 * fluid-upgrade.mjs - SensEar design-prototype fluid sizing upgrade.
 * Spec: plans/fluid-sizing-upgrade.md
 * Plan: .kilo/plans/1784118399158-fluid-sizing-upgrade-plan.md
 *
 * Usage:
 *   node handoff/tools/fluid-upgrade.mjs --self-test
 *   node handoff/tools/fluid-upgrade.mjs --dry-run "handoff/SensEar FAQ.dc.html"
 *   node handoff/tools/fluid-upgrade.mjs "handoff/SensEar FAQ.dc.html" [...more]
 *
 * Only inline style="..." attributes are transformed; <helmet><style> is never touched.
 * Idempotency: files already containing "max-width:min(1760px" are skipped.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

/* ---------- exact decimal arithmetic (round half away from zero) ---------- */
/* value(str) * num/den, rounded to outDec decimals; returns decimal string with
   trailing zeros stripped. Integer (BigInt) math on decimal strings - immune to
   IEEE-754 artifacts like 4.7*1.15 = 5.404999... (must round to 5.41). */
function mulRound(str, num, den, outDec) {
  const m = /^(-?)(\d*)(?:\.(\d+))?$/.exec(String(str));
  if (!m || ((m[2] === "" || m[2] === undefined) && !m[3])) return null;
  const neg = m[1] === "-";
  const frac = m[3] || "";
  const digits = BigInt((m[2] || "0") + frac);
  const N = digits * BigInt(num) * 10n ** BigInt(outDec);
  const D = 10n ** BigInt(frac.length) * BigInt(den);
  let q = N / D;
  if ((N % D) * 2n >= D) q += 1n;
  let s = q.toString();
  if (outDec > 0) {
    s = s.padStart(outDec + 1, "0");
    s = s.slice(0, -outDec) + "." + s.slice(-outDec);
    s = s.replace(/0+$/, "").replace(/\.$/, "");
  }
  if (s === "0") return "0";
  return neg ? "-" + s : s;
}

const scaleRem = (v) => mulRound(v, 115, 100, 2);        // x1.15, 2 decimals
function scalePx(v) {                                     // x1.15, int; >=100 -> nearest 10
  let r = mulRound(v, 115, 100, 0);
  const abs = r.startsWith("-") ? r.slice(1) : r;
  if (Number(abs) >= 100) {
    const tens = mulRound(r, 1, 10, 0);
    r = tens === "0" ? "0" : tens + "0";
  }
  return r;
}
const div176  = (v) => mulRound(v, 10, 176, 2);   // V/17.6   (vw, 2 dec)
const remVw   = (v) => mulRound(v, 160, 176, 2);  // V*16/17.6 (vw, 2 dec)
const frac08  = (v) => mulRound(v, 8, 10, 0);     // round(0.8*V)  px min
const frac08r = (v) => mulRound(v, 8, 10, 2);     // round2(0.8*V) rem min
const frac072 = (v) => mulRound(v, 72, 100, 0);   // round(0.72*V) spacing min

/* ---------- property classes ---------- */
const FONT = new Set(["font-size"]);
const SPACE = new Set([
  "padding", "padding-top", "padding-right", "padding-bottom", "padding-left",
  "margin", "margin-top", "margin-right", "margin-bottom", "margin-left",
  "gap", "row-gap", "column-gap",
]);
const FIXED = new Set([
  "width", "height", "max-width", "max-height", "min-width", "min-height",
  "top", "left", "right", "bottom",
]);

const TOKEN = /^(-?(?:\d+(?:\.\d+)?|\.\d+))(px|rem)$/;
const CLAMP_NUM = /(-?(?:\d+(?:\.\d+)?|\.\d+))(px|rem|vw)/g;

/* ---------- declaration transform ---------- */
function processDecl(decl, stats) {
  const ci = decl.indexOf(":");
  if (ci < 0) return decl;
  const prop = decl.slice(0, ci).trim().toLowerCase();
  const value = decl.slice(ci + 1);
  if (!FONT.has(prop) && !SPACE.has(prop) && !FIXED.has(prop)) return decl;

  // Rule 1: value already contains clamp()
  if (value.includes("clamp(")) {
    if (prop === "font-size") {
      const nv = value.replace(CLAMP_NUM, (mm, n, u) =>
        (u === "px" ? mulRound(n, 115, 100, 0) : mulRound(n, 115, 100, 2)) + u);
      if (nv !== value) stats.fontClampsRescaled++;
      return decl.slice(0, ci + 1) + nv;
    }
    return decl;
  }

  // Rule 2: container special case
  if (prop === "max-width" && value.trim() === "1380px") {
    stats.containers++;
    return decl.slice(0, ci + 1) + value.replace("1380px", "min(1760px,100%)");
  }

  // Safety: any other functional value (var/min/calc/...) passes through
  if (value.includes("(")) return decl;

  // Rules 3+4: per-token scale, then wrap
  const tokens = value.trim().split(/\s+/);
  let changed = false;
  const out = tokens.map((tok) => {
    const m = TOKEN.exec(tok);
    if (!m) return tok;
    const [, num, unit] = m;
    if (unit === "px") {
      if (Math.abs(Number(num)) <= 2) return tok;          // hairlines
      const V = scalePx(num);
      changed = true; stats.tokensScaled++;
      const Vn = Number(V);
      if (FONT.has(prop) && Vn >= 12) {
        stats.tokensClamped++;
        return "clamp(" + frac08(V) + "px," + div176(V) + "vw," + V + "px)";
      }
      if (SPACE.has(prop) && Vn >= 14) {                    // positive only by Vn>=14
        stats.tokensClamped++;
        return "clamp(" + frac072(V) + "px," + div176(V) + "vw," + V + "px)";
      }
      return V + "px";                                      // fixed at scaled value
    }
    // rem
    const V = scaleRem(num);
    changed = true; stats.tokensScaled++;
    if (FONT.has(prop)) {
      stats.tokensClamped++;
      return "clamp(" + frac08r(V) + "rem," + remVw(V) + "vw," + V + "rem)";
    }
    return V + "rem";
  });
  if (!changed) return decl;
  return decl.slice(0, ci) + ":" + out.join(" ");
}

function transformStyle(style, stats) {
  return style.split(";").map((d) => (d.trim() === "" ? d : processDecl(d, stats))).join(";");
}

const STYLE_ATTR = /style="([^"]*)"/g;
function transformHtml(html, stats) {
  return html.replace(STYLE_ATTR, (m, s) => 'style="' + transformStyle(s, stats) + '"');
}

/* ---------- Step-3 nav overrides (scoped to <nav id="se-nav">...</nav>) ---------- */
/* Patterns are the exact generic-transform outputs of the known pre-upgrade nav values. */
const NAV_OVERRIDES = [
  // navlinks + contact pill (orig font-size:13px)
  ["font-size:clamp(12px,0.85vw,15px)", "font-size:clamp(13px,1.05vw,15px)"],
  // link-group gap (orig gap:32px)
  ["gap:clamp(27px,2.1vw,37px)", "gap:clamp(14px,2.5vw,37px)"],
  // nav container gap (orig gap:24px)
  ["gap:clamp(20px,1.59vw,28px)", "gap:clamp(14px,2.5vw,37px)"],
  // nav container side padding (orig padding:0 32px)
  ["padding:0 clamp(27px,2.1vw,37px)", "padding:0 clamp(20px,2.5vw,37px)"],
  // contact pill (orig padding:11px 22px) + nowrap
  ["padding:13px clamp(18px,1.42vw,25px)", "padding:12px clamp(18px,1.7vw,25px);white-space:nowrap"],
];

function applyNavOverrides(html, stats) {
  const start = html.indexOf('<nav id="se-nav"');
  if (start < 0) { stats.navFound = false; return html; }
  stats.navFound = true;
  const close = html.indexOf("</nav>", start);
  const end = close < 0 ? html.length : close + 6;
  let region = html.slice(start, end);
  stats.navReplacements = [];
  for (const [from, to] of NAV_OVERRIDES) {
    let count = 0;
    while (region.includes(from)) { region = region.replace(from, to); count++; }
    stats.navReplacements.push({ from, count });
  }
  return html.slice(0, start) + region + html.slice(end);
}

function newStats() {
  return { tokensScaled: 0, tokensClamped: 0, fontClampsRescaled: 0, containers: 0, navFound: false, navReplacements: [] };
}

/* ---------- self-test (calibration table; abort before touching files) ---------- */
const SELF_TESTS = [
  ["max-width:1380px", "max-width:min(1760px,100%)"],
  ["padding:22px 0", "padding:clamp(18px,1.42vw,25px) 0"],
  ["padding:0 32px 0 84px", "padding:0 clamp(27px,2.1vw,37px) 0 clamp(70px,5.51vw,97px)"],
  ["width:38px;height:38px", "width:44px;height:44px"],
  ["font-size:20px", "font-size:clamp(18px,1.31vw,23px)"],
  ["padding-bottom:5px", "padding-bottom:6px"],
  ["max-width:760px", "max-width:870px"],
  ["left:32px", "left:37px"],
  ["top:-18px;right:-18px", "top:-21px;right:-21px"],
  ["font-size:1.15rem", "font-size:clamp(1.06rem,1.2vw,1.32rem)"],
  ["font-size:clamp(2.4rem,5vw,4.7rem)", "font-size:clamp(2.76rem,5.75vw,5.41rem)"],
  // supplementary guards
  ["font-size:13px", "font-size:clamp(12px,0.85vw,15px)"],
  ["gap:32px", "gap:clamp(27px,2.1vw,37px)"],
  ["gap:24px", "gap:clamp(20px,1.59vw,28px)"],
  ["padding:11px 22px", "padding:13px clamp(18px,1.42vw,25px)"],
  ["padding:150px 0 80px", "padding:clamp(122px,9.66vw,170px) 0 clamp(66px,5.23vw,92px)"],
  ["width:60vw;min-height:92vh;left:50%;margin:0 auto", "width:60vw;min-height:92vh;left:50%;margin:0 auto"],
  ["letter-spacing:.22em;border-radius:100px;background-size:0% 2px", "letter-spacing:.22em;border-radius:100px;background-size:0% 2px"],
];

const NAV_TEST_IN =
  '<nav id="se-nav" style="padding:22px 0;"><div style="max-width:1380px;padding:0 32px;gap:24px;">' +
  '<a class="se-navlink" style="font-size:13px;padding-bottom:5px;"></a><div style="gap:32px;">' +
  '<a style="font-size:13px;padding:11px 22px;"></a></div></div></nav>';
const NAV_TEST_OUT =
  '<nav id="se-nav" style="padding:clamp(18px,1.42vw,25px) 0;"><div style="max-width:min(1760px,100%);padding:0 clamp(20px,2.5vw,37px);gap:clamp(14px,2.5vw,37px);">' +
  '<a class="se-navlink" style="font-size:clamp(13px,1.05vw,15px);padding-bottom:6px;"></a><div style="gap:clamp(14px,2.5vw,37px);">' +
  '<a style="font-size:clamp(13px,1.05vw,15px);padding:12px clamp(18px,1.7vw,25px);white-space:nowrap;"></a></div></div></nav>';

function runSelfTests() {
  const errors = [];
  for (const [input, expected] of SELF_TESTS) {
    const got = transformStyle(input, newStats());
    if (got !== expected) errors.push("  in:  " + input + "\n  exp: " + expected + "\n  got: " + got);
  }
  const navStats = newStats();
  const navGot = applyNavOverrides(transformHtml(NAV_TEST_IN, navStats), navStats);
  if (navGot !== NAV_TEST_OUT) errors.push("  NAV pipeline\n  exp: " + NAV_TEST_OUT + "\n  got: " + navGot);
  if (errors.length) {
    console.error("SELF-TEST FAILED (" + errors.length + "):\n" + errors.join("\n----\n"));
    process.exit(1);
  }
  console.log("self-test: " + (SELF_TESTS.length + 1) + " assertions passed");
}

/* ---------- diff ---------- */
function printDiff(file, a, b) {
  const A = a.split("\n"), B = b.split("\n");
  console.log("--- " + file + " (original)\n+++ " + file + " (upgraded)");
  const n = Math.max(A.length, B.length);
  let hunks = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] !== B[i]) {
      hunks++;
      console.log("@@ line " + (i + 1) + " @@\n- " + (A[i] ?? "") + "\n+ " + (B[i] ?? ""));
    }
  }
  console.log("(" + hunks + " changed lines)");
}

/* ---------- main ---------- */
const EXCLUDED = new Set([
  "SensEar Homepage XL.dc.html", "SensEar Homepage v4.dc.html", "SensEar Homepage v5.dc.html",
  "SensEar Homepage_125.dc.html", "SensEar Homepage_125 Responsive Check.dc.html",
  "Font Options.dc.html", "SensEar Interactive Logo.dc.html", "SensEar Hotels and Resorts.dc.html",
]);

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const selfTestOnly = args.includes("--self-test");
const files = args.filter((a) => a !== "--dry-run" && a !== "--self-test");

runSelfTests();
if (selfTestOnly) process.exit(0);
if (files.length === 0) {
  console.error("usage: node fluid-upgrade.mjs [--dry-run|--self-test] <file>...");
  process.exit(2);
}

for (const f of files) {
  if (EXCLUDED.has(basename(f))) { console.log("REFUSE (excluded file): " + f); continue; }
  const html = readFileSync(f, "utf8");
  if (html.includes("max-width:min(1760px")) { console.log("SKIP (already upgraded): " + f); continue; }
  const stats = newStats();
  let out = transformHtml(html, stats);
  out = applyNavOverrides(out, stats);
  if (dry) printDiff(f, html, out); else writeFileSync(f, out);
  const navInfo = stats.navFound
    ? stats.navReplacements.map((r) => r.count).join("/")
    : "NAV NOT FOUND";
  console.log((dry ? "[dry] " : "[write] ") + f);
  console.log("  tokens scaled: " + stats.tokensScaled + ", clamped: " + stats.tokensClamped +
    ", font-clamps rescaled: " + stats.fontClampsRescaled + ", containers: " + stats.containers +
    ", nav overrides (link-fs/group-gap/nav-gap/side-pad/pill): " + navInfo);
  if (stats.navFound) {
    for (const r of stats.navReplacements) {
      if (r.count === 0) console.log("  WARN: nav override matched 0 times: " + r.from);
    }
  } else {
    console.log("  WARN: <nav id=\"se-nav\"> not found");
  }
}