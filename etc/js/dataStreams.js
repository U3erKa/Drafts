import { stringify } from "csv-stringify";
// ...

const processCurrentRecord = async (record, writable) => {
  const dataToWrite = prepareRecord(record);
  const bufferNotFull = writable.write(dataToWrite);
  if (!bufferNotFull) {
    await new Promise((res) => {
      writable.once("drain", res);
    });
  }
};

const generateFile = async () => {
  const stringifier = stringify();
  const uploadPromise = uploadToS3("dest/path/fileName.csv", stringifier);
  stringifier.write(["Column 1", "Column2 " /* ... */]); // add column names
  const recordsStream = FileRecord.query()
    .where({
      /* ... */
    })
    .orderBy("id")
    .toKnexQuery()
    .stream();
  for await (const record of recordsStream) {
    await processCurrentRecord(record, stringifier);
  }
  stringifier.end();
  await uploadPromise;
};
