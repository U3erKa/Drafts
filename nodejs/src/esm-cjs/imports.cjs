// eslint-disable-next-line @typescript-eslint/no-var-requires
const cjs = require('./exports.cjs').test;
(async () => {
  const esm = (await import('./exports.mjs')).test;

  console.log('imports.cjs', esm, cjs);
})();
const esm = import('./exports.mjs');

module.exports.cjs = cjs;
module.exports.esm = esm;
