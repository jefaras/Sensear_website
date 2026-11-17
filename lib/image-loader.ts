// next/image loader for the static export: points each srcset width to the WebP variant
// that scripts/build-image-variants.mjs writes before the build
// (/images/a/b.jpg at 960 px -> /images/_opt/a/b.jpg-960.webp).
// Anything outside /images (or an SVG/GIF) is served as is.
export default function imageLoader({ src, width }: { src: string; width: number }): string {
    if (!src.startsWith('/images/') || src.startsWith('/images/_opt/') || !/\.(jpe?g|png|webp)$/i.test(src)) {
        return src;
    }
    return `/images/_opt/${src.slice('/images/'.length)}-${width}.webp`;
}
