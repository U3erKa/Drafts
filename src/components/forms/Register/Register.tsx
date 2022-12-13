import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { User } from 'types/api/getFromOwnDB';
import { register } from 'app/slices/auth';

const initialValues: User = {
  nickName: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  userRole: '',
};

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = (values: typeof initialValues, formikBag: FormikHelpers<typeof initialValues>) => {
    dispatch(register(values) as unknown as AnyAction);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field name="nickName" placeholder="nickName" />
        <Field name="firstName" placeholder="firstName" />
        <Field name="lastName" placeholder="lastName" />
        <Field name="password" placeholder="password" type="password" />
        <Field name="email" placeholder="email" />
        <Field name="userRole" placeholder="userRole" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
