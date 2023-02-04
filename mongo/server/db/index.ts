import mongoose from 'mongoose';
import { DB_STRING } from '../constants';

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
