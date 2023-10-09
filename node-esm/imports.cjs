(async () => {
  const esm = (await import('./exports.mjs')).test;
  const cjs = require('./exports.cjs').test;

  console.log(esm, cjs);
})();
