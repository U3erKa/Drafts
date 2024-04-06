import { stringify } from 'csv-stringify';
/** @type {*} */
const FileRecord = {};

const processCurrentRecord = async (
  /** @type {any} */ record,
  /** @type {import("csv-stringify").Stringifier} */ writable,
) => {
  const dataToWrite = prepareRecord(record);
  const bufferNotFull = writable.write(dataToWrite);
  if (!bufferNotFull) {
    await new Promise((res) => {
      writable.once('drain', res);
    });
  }
};

const generateFile = async () => {
  const stringifier = stringify();
  const uploadPromise = uploadToS3('dest/path/fileName.csv', stringifier);
  stringifier.write(['Column 1', 'Column2 ' /* ... */]); // add column names
  const recordsStream = FileRecord.query()
    .where({
      /* ... */
    })
    .orderBy('id')
    .toKnexQuery()
    .stream();
  for await (const record of recordsStream) {
    await processCurrentRecord(record, stringifier);
  }
  stringifier.end();
  await uploadPromise;
};

/**
 * @param {any} record
 */
function prepareRecord(record) {
  throw new Error('Function not implemented.');
}

/**
 * @param {string} arg0
 * @param {import("csv-stringify").Stringifier} stringifier
 */
function uploadToS3(arg0, stringifier) {
  throw new Error('Function not implemented.');
}
