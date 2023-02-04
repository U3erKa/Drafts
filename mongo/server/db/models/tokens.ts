import { model, Schema } from '..';

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const Token = model('Token', tokenSchema);

export default Token;
