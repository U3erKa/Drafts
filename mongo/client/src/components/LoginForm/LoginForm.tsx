import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { login } from 'redux/user.slice';
import type { FormikHelpers } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

function LoginForm() {
  const dispatch = useDispatch();
  const submitHandler = (
    values: typeof initialValues,
    formikBag: FormikHelpers<typeof initialValues>
  ) => {
    // @ts-ignore
    dispatch(login(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <label>
          Email:
          <Field name="email" />
        </label>
        <label>
          Password:
          <Field name="password" type="password" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
