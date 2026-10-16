import { mkdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const outputDirectory = new URL('../media/optimized/', import.meta.url);
await mkdir(outputDirectory, { recursive: true });

const images = [
  { source: 'Foto.png', output: 'ulises-fernandez.webp', width: 800, quality: 85 },
  { source: 'Foto2.jpg', output: 'ulises-personal.webp', width: 1100, quality: 85 },
  { source: 'proyecto_escuela.png', output: 'proyecto-escuela.webp', width: 1600, quality: 88 },
  { source: 'pht-beta.png', output: 'habitflow.webp', width: 1440, quality: 88 },
  { source: 'safiros.png', output: 'safiros.webp', width: 1440, quality: 85 },
];

for (const image of images) {
  const source = fileURLToPath(new URL(`../media/${image.source}`, import.meta.url));
  const destination = fileURLToPath(new URL(image.output, outputDirectory));
  await sharp(source)
    .rotate()
    .resize({ width: image.width, withoutEnlargement: true })
    .webp({ quality: image.quality, effort: 6 })
    .toFile(destination);
  const { size } = await stat(destination);
  console.log(`${image.output}: ${(size / 1024).toFixed(1)} KB`);
}
