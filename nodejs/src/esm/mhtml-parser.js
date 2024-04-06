// @ts-nocheck
// import { parseMhtml } from "mhtml-stream/bundle/mhtml.esm.min.js"
import { promises as fs, createReadStream, existsSync, mkdirSync } from 'fs';
import { StringDecoder } from 'string_decoder';

const stringDecoder = new StringDecoder('utf8');

const folders = (await fs.readdir('.')).filter((folder) => folder.search(/\d/) === 0);

folders.forEach(async (folder) => {
  const files = await fs.readdir(folder);
  const tasks = files.map((file) => parseFile(folder, file));
  await Promise.allSettled(tasks);
});
// const outFolders = await fs.readdir("./out")
// const tasks = outFolders.map((folder) => appendStyles(folder))
// const tasks1 = await Promise.allSettled(tasks)
// console.log(tasks1);

async function parseFile(/** @type {string} */ folder, /** @type {string} */ file) {
  const parsedFilePath = `${folder}/${file}`;
  // for await (const { headers, content } of parseMhtml(createReadStream(parsedFilePath))) {
  //   const ext = getExtension(headers.get("Content-Type"))
  //   let filename = file

  //   if (["svg" /*, "png", "gif", "jpg" */].includes(ext) && headers.has("Content-Location")) {
  //     /** @type {string} */
  //     const fileUrl = headers.get("Content-Location")
  //     const encodedString = fileUrl.substring(fileUrl.lastIndexOf("/") + 1)
  //     filename = decodeURIComponent(encodedString)
  //   }
  //   writeFile(folder, `${filename}${ext ? "." + ext : ""}`, stringDecoder.write(content))
  // }

  const data = await fs.readFile(parsedFilePath, 'utf8');
  const boundary = /------MultipartBoundary--.*----/;
  const parts = data.split(boundary);
  parts.shift();
  const base64Images = [];

  parts.forEach((part) => {
    const [_headers, contents] = part.split('\r\n\r\n');
    const headers = _headers.split('\r\n');
    // console.log(headers)

    const contentType = headers.find((value) => value.includes('Content-Type: ')).substring('Content-Type: '.length);
    const contentLocation = headers
      .find((value) => value.includes('Content-Location: '))
      .substring('Content-Location: '.length);

    if (headers.includes('Content-Transfer-Encoding: base64')) {
      const fileUrl = contentLocation;
      const ext = getExtension(contentType);
      const encodedString = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
      const filename = decodeURIComponent(encodedString);
      const result = { filename, contentType, contentLocation, contents: contents.split('\r\n').join('') };
      writeFile(folder, `images.json`, `${JSON.stringify(result)},\n`);
    }
  });
}

function writeFile(folder, file, content, i = 1) {
  if (!content) return;
  if (!existsSync('out')) {
    mkdirSync('out');
  }
  if (!existsSync(`out/${folder}`)) {
    mkdirSync(`out/${folder}`);
  }

  try {
    const filename = `out/${folder}/${i}-${file}`;
    // if (existsSync(filename)) {
    //   return writeFile(folder, file, content, i + 1)
    // }
    fs.appendFile(filename, content);
    // fs.writeFile(filename, content)
  } catch (error) {}
}

function getExtension(mimeType) {
  switch (mimeType) {
    case 'text/html':
      return 'html';
    case 'text/css':
      return 'css';
    case 'image/svg+xml':
      return 'svg';
    case 'image/png':
      return 'png';
    case 'image/gif':
      return 'gif';
    case 'image/jpeg':
      return 'jpg';

    default:
      console.error(`unknown mime-type: ${mimeType}`);
      return '';
  }
}

async function appendStyles(/** @type {string} */ folder) {
  const files = (await fs.readdir(`./out/${folder}`)).filter(
    (file) => file.endsWith('css') && !file.endsWith('style.css'),
  );

  const filenames = new Set(files.map((file) => file.substring(2)));
  console.log(filenames);
  filenames.forEach((filename) => {
    const matches = files.filter((file) => file.includes(filename));

    matches.forEach(async (match) => {
      const styles = `./out/${folder}/${match}`;
      const contents = await fs.readFile(styles, 'utf8');
      await fs.appendFile(`./out/${folder}/${filename}-style.css`, contents, 'utf8');
      fs.rm(styles);
    });
  });
}
