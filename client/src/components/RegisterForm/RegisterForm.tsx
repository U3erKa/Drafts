import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { register } from 'redux/user.slice';
import type { FormikHelpers } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  isMale: true,
  email: '',
  password: '',
};

function RegisterForm() {
  const dispatch = useDispatch();
  const submitHandler = (
    values: typeof initialValues,
    formikBag: FormikHelpers<typeof initialValues>
  ) => {
    // @ts-ignore
    dispatch(register(values));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      <Form>
        <fieldset>
          <label>
            First name:
            <Field name="firstName" />
          </label>
          <label>
            Last name:
            <Field name="lastName" />
          </label>
          <label>
            Email:
            <Field name="email" />
          </label>
          <label>
            Password:
            <Field name="password" type="password" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Gender</legend>
          <label>
            Male: <Field type="radio" name="isMale" value={true} />
          </label>
          <label>
            Female: <Field type="radio" name="isMale" value={false} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
