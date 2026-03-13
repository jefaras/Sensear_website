import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const INPUT_FILES = [
  "dictionaries/en-meta-title-description.txt",
  "dictionaries/el-meta-title-description.txt",
];

const OUTPUT_FILE = "dictionaries/seo-problematic-meta-title-description.txt";

// SquirrelScan-aligned practical ranges used for this report
const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 160;

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function parseMetaFile(content) {
  const lines = content.split(/\r?\n/);
  const entries = [];
  let currentUrl = null;
  let currentTitle = null;
  let currentDescription = null;

  for (const line of lines) {
    if (line.startsWith("## URL: ")) {
      if (currentUrl) {
        entries.push({
          url: currentUrl,
          title: currentTitle ?? "",
          description: currentDescription ?? "",
        });
      }
      currentUrl = line.replace("## URL: ", "").trim();
      currentTitle = null;
      currentDescription = null;
      continue;
    }

    if (line.startsWith("Meta Title: ")) {
      currentTitle = line.replace("Meta Title: ", "").trim();
      continue;
    }

    if (line.startsWith("Meta Description: ")) {
      currentDescription = line.replace("Meta Description: ", "").trim();
      continue;
    }
  }

  if (currentUrl) {
    entries.push({
      url: currentUrl,
      title: currentTitle ?? "",
      description: currentDescription ?? "",
    });
  }

  return entries;
}

function normalize(s) {
  return (s || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function addToMapList(map, key, value) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

function buildReport(entries) {
  const titleMap = new Map();
  const descriptionMap = new Map();

  for (const e of entries) {
    addToMapList(titleMap, normalize(e.title), e.url);
    addToMapList(descriptionMap, normalize(e.description), e.url);
  }

  const rows = entries.map((e) => {
    const titleProblems = [];
    const descriptionProblems = [];

    const tLen = e.title.length;
    const dLen = e.description.length;

    if (tLen < TITLE_MIN) {
      titleProblems.push(
        `core/meta-title: Title too short (${tLen} chars; expected ${TITLE_MIN}-${TITLE_MAX})`
      );
    }
    if (tLen > TITLE_MAX) {
      titleProblems.push(
        `core/meta-title: Title too long (${tLen} chars; expected ${TITLE_MIN}-${TITLE_MAX})`
      );
    }

    if (dLen < DESC_MIN) {
      descriptionProblems.push(
        `core/meta-description: Description too short (${dLen} chars; expected ${DESC_MIN}-${DESC_MAX})`
      );
    }
    if (dLen > DESC_MAX) {
      descriptionProblems.push(
        `core/meta-description: Description too long (${dLen} chars; expected ${DESC_MIN}-${DESC_MAX})`
      );
    }

    const tDupUrls = titleMap.get(normalize(e.title)) || [];
    const dDupUrls = descriptionMap.get(normalize(e.description)) || [];

    if (tDupUrls.length > 1) {
      titleProblems.push(
        `core/title-unique + content/duplicate-title: Duplicate title used on ${tDupUrls.length} URLs`
      );
    }

    if (dDupUrls.length > 1) {
      descriptionProblems.push(
        `content/duplicate-description: Duplicate description used on ${dDupUrls.length} URLs`
      );
    }

    return {
      ...e,
      titleProblems,
      descriptionProblems,
      hasProblem: titleProblems.length > 0 || descriptionProblems.length > 0,
    };
  });

  const problematic = rows.filter((r) => r.hasProblem);

  const duplicateTitleGroups = [];
  for (const [normTitle, urls] of titleMap.entries()) {
    if (urls.length > 1) duplicateTitleGroups.push({ normTitle, urls });
  }
  duplicateTitleGroups.sort((a, b) => b.urls.length - a.urls.length);

  const duplicateDescriptionGroups = [];
  for (const [normDesc, urls] of descriptionMap.entries()) {
    if (urls.length > 1) duplicateDescriptionGroups.push({ normDesc, urls });
  }
  duplicateDescriptionGroups.sort((a, b) => b.urls.length - a.urls.length);

  const out = [];
  out.push("============================================================");
  out.push("PROBLEMATIC META TITLES & DESCRIPTIONS REPORT (EN + EL)");
  out.push("============================================================");
  out.push(`Generated: ${new Date().toISOString()}`);
  out.push("Source files:");
  for (const f of INPUT_FILES) out.push(`- ${f}`);
  out.push("Audit reference: .agent/audits/agent-seo-content.llm.txt");
  out.push("");
  out.push("Issue labels used in this report:");
  out.push("- core/meta-title: Title too short / Title too long");
  out.push("- core/meta-description: Description too short / Description too long");
  out.push("- core/title-unique + content/duplicate-title: Duplicate title");
  out.push("- content/duplicate-description: Duplicate description");
  out.push("");
  out.push(
    `Length ranges applied: title ${TITLE_MIN}-${TITLE_MAX}, description ${DESC_MIN}-${DESC_MAX}`
  );
  out.push(`Total URLs analyzed: ${entries.length}`);
  out.push(`Problematic URLs: ${problematic.length}`);

  out.push("");
  out.push("============================================================");
  out.push("FULL LIST OF PROBLEMATIC TITLES/DESCRIPTIONS BY URL");
  out.push("============================================================");

  for (const row of problematic) {
    out.push("");
    out.push(`URL: ${row.url}`);
    out.push(`Title: ${row.title}`);
    if (row.titleProblems.length) {
      out.push("Title problems:");
      for (const p of row.titleProblems) out.push(`- ${p}`);
    } else {
      out.push("Title problems: none");
    }

    out.push(`Description: ${row.description}`);
    if (row.descriptionProblems.length) {
      out.push("Description problems:");
      for (const p of row.descriptionProblems) out.push(`- ${p}`);
    } else {
      out.push("Description problems: none");
    }
    out.push("------------------------------------------------------------");
  }

  out.push("");
  out.push("============================================================");
  out.push("DUPLICATE TITLE GROUPS");
  out.push("============================================================");
  if (duplicateTitleGroups.length === 0) {
    out.push("No duplicate titles found.");
  } else {
    for (const g of duplicateTitleGroups) {
      const sample = entries.find((e) => normalize(e.title) === g.normTitle)?.title || g.normTitle;
      out.push("");
      out.push(`Title: ${sample}`);
      out.push(`Problem: core/title-unique + content/duplicate-title (used on ${g.urls.length} URLs)`);
      out.push("URLs:");
      for (const u of g.urls) out.push(`- ${u}`);
    }
  }

  out.push("");
  out.push("============================================================");
  out.push("DUPLICATE DESCRIPTION GROUPS");
  out.push("============================================================");
  if (duplicateDescriptionGroups.length === 0) {
    out.push("No duplicate descriptions found.");
  } else {
    for (const g of duplicateDescriptionGroups) {
      const sample =
        entries.find((e) => normalize(e.description) === g.normDesc)?.description || g.normDesc;
      out.push("");
      out.push(`Description: ${sample}`);
      out.push(
        `Problem: content/duplicate-description (used on ${g.urls.length} URLs)`
      );
      out.push("URLs:");
      for (const u of g.urls) out.push(`- ${u}`);
    }
  }

  return `${out.join("\n")}\n`;
}

function main() {
  const entries = INPUT_FILES.flatMap((f) => parseMetaFile(read(f)));
  const report = buildReport(entries);
  fs.writeFileSync(path.join(ROOT, OUTPUT_FILE), report, "utf8");
  console.log(`Generated ${OUTPUT_FILE}`);
}

main();

