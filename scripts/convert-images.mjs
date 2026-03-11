import sharp from 'sharp';
import { statSync } from 'fs';

const images = [
  { src: 'public/images/industries/hotels-resorts-boutique-hotel-music.png', quality: 75 },
  { src: 'public/images/contact/vinyl-record-contact-form-bg.png', quality: 75 },
  { src: 'public/images/industries/industries-connected-worlds.png', quality: 75 },
  { src: 'public/images/blog/blog-building-brand-people-can-hear.jpg', quality: 40 },
];

for (const { src, quality } of images) {
  const outPath = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  await sharp(src).webp({ quality }).toFile(outPath);
  const size = statSync(outPath).size;
  console.log(`${outPath}: ${Math.round(size / 1024)} KB`);
}
