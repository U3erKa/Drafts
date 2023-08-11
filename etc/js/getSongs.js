const fs = require('fs');

const data = fs.readFileSync('./sources.json', { encoding: 'utf8' });
/** @type {object} */
const obj = JSON.parse(data);
// const res = new Set();
const res = new Set();
const getter = (obj) => obj.song;

// obj.forEach((arr) => {
//   res.push(arr.filter(Boolean));
// });

// fs.writeFileSync('../Downloads/sources.json', JSON.stringify(res), {
//   encoding: 'utf8',
// });

// const data = fs.readFileSync('./sources.json', { encoding: 'utf8' });
// const obj = JSON.parse(data);
// const links = new Set();
// obj.forEach((arr) => {
//   const srcs = arr.filter((obj) => getter(obj) !== 'none');
//   links.add(...srcs.map(getter));
// });

// Object.entries(obj).forEach(([key, value]) => {
//   // const objs = value.filter((v) => !!v && getter(v) !== 'none');
//   const songs = value.map((obj) => getter(obj));
//   // console.log(key);
//   res.add(...songs);
// });

obj.forEach((o) => {
  res.add(getter(o));
});

const result = [...res].filter(Boolean).sort();
const links = result.map((song) => `https://invertedfate.com/music/${song}`);
const m3u = `#EXTM3U
${links.join('\n')}
`;

fs.writeFileSync('../Downloads/songs.m3u8', m3u, { encoding: 'utf8' });
