import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// @ts-expect-error file exists
import styles from './SignUpForm.module.scss';
import CustomInput from '../CustomInput';

const initialState = {
  email: '',
  password: '',
  isRemembering: false,
  gender: '',
  accountLevel: 'basic',
};

export default function SignUpForm() {
  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialState} onSubmit={handleSubmit} /* validationSchema={SIGNUP_SCHEMA} */>
      <Form className={styles.form}>
        <CustomInput name='name' labelText='Enter name' />
        <Field className={styles.input} type="text" name="email" />
        {/* <ErrorMessage name="email" component="div" /> */}
        <Field className={styles.input} type="password" name="password" />
        <CustomInput as="select" name="accountLevel">
          <option value="basic">Basic</option>
          <option value="pro">Pro</option>
          <option value="ultra">Ultra</option>
        </CustomInput>
        <label>
          <Field type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <Field type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <Field type="checkbox" name="isRemembering" />
          Remember me
        </label>
        <button className={styles.btn} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
}
