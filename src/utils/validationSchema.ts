import * as yup from 'yup';

export const USER_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});
export type User = yup.InferType<typeof USER_SCHEMA>;
