import { Schema, model } from '../';
import * as yup from 'yup';
import bcrypt from 'bcrypt';

const emailSchema = yup.string().email().required();

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => emailSchema.isValid(value),
    },
  },
  password: {
    type: String,
    required: true,
    set: (password: string) => {
      const hash = bcrypt.hashSync(password, 10);
      return hash;
    },
  },
  isMale: Boolean,
  birthday: { type: Date },
  contacts: {
    phone: { type: String },
  },
});

const User = model('User', userSchema);

export default User;
