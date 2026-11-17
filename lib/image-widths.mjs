// Widths of the pre-generated image variants. Shared by next.config.mjs (deviceSizes and
// imageSizes, which decide the srcset widths next/image asks for) and
// scripts/build-image-variants.mjs (which writes one WebP per width). Change both together here.
export const DEVICE_SIZES = [640, 960, 1280, 1920];
export const IMAGE_SIZES = [64, 128, 256, 384];
export const ALL_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES];
