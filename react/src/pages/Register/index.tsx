import { Field, Form, Formik, FormikHelpers } from 'formik';
import { User } from 'types/api/getFromOwnDB';
import { useState } from 'react';
import { useRegisteredUser } from 'hooks/query';

const initialValues: User = {
  nickName: '',
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  userRole: '',
};

export default function Register() {
  const [values, setValues] = useState<User | undefined>(undefined);
  const { data, isLoading, error } = useRegisteredUser(values);

  const handleSubmit = (values: typeof initialValues, formikBag: FormikHelpers<typeof initialValues>) => {
    setValues(values);
    formikBag.resetForm();
  };

  return (
    <>
      {isLoading && <div>Registering...</div>}
      {error?.message}
      <h1>Register now</h1>
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
    </>
  );
}
