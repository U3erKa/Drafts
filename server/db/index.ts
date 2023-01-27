import mongoose from 'mongoose';

const DB_STRING = process.env.DB_STRING || 'mongodb://127.0.0.1:27017/phonesDb';

async function connectToDb() {
  await mongoose.connect(DB_STRING);
}

(async () => {
  try {
    await connectToDb();
  } catch (error) {
    console.log('DB ERROR:');
    console.log(error);
  }
})();

export const Schema = mongoose.Schema;
export const model = mongoose.model;
