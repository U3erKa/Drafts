import axios from 'axios';
import { promises as fs, createWriteStream } from 'fs';

export async function downloadFile(url: string, outFolder = '../dist', filename?: string) {
  const outputLocationPath = new URL(
    `${outFolder}/${filename ?? url.split('/').at(-1)}`,
    import.meta.url,
  );

  await fs.writeFile(outputLocationPath, '');
  const writer = createWriteStream(outputLocationPath);
  const { data } = await axios.get(url, { url, responseType: 'stream' });

  return new Promise<URL>((resolve, reject) => {
    data.pipe(writer);
    let error: Error;
    writer.on('error', (err) => {
      error = err;
      writer.close();
      reject(err);
    });
    writer.on('close', () => {
      if (!error) {
        resolve(outputLocationPath);
      }
    });
  });
}
