import { promises as fs } from 'fs';

export async function downloadFile(url: string, filename?: string, outFolder = '../dist') {
  const outputFilePath = new URL(`${outFolder}/${filename ?? url.split('/').at(-1)}`, import.meta.url);
  const data = await fetch(url).then((r) => r.arrayBuffer());

  await fs.writeFile(outputFilePath, Buffer.from(data));
  return outputFilePath;
}
