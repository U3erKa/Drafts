import { Schema, model } from '../';

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isMale: Boolean,
  birthday: { type: Date },
  contacts: {
    phone: { type: String },
  },
});

const User = model('User', userSchema);

export default User;
