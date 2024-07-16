import { Field, Form, Formik, type FormikConfig } from 'formik';
import { initialValues, useUserMutation } from 'hooks/mutation';

export default function Register() {
  const { isPending, error, mutate } = useUserMutation();

  const handleSubmit: FormikConfig<typeof initialValues>['onSubmit'] = (values, formikBag) => {
    mutate(values, {
      onSuccess() {
        formikBag.resetForm();
      },
    });
  };

  return (
    <>
      {isPending && <div>Registering...</div>}
      {error && error?.message}
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
