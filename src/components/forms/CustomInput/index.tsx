import React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function CustomInput(props: any) {
  const { name, labelText, ...restProps } = props;

  return (
    <div>
      <label>
        {labelText}
        <Field name={name} className="input" {...restProps} />
      </label>
      <ErrorMessage name={name} className="inputError" component="div" />
    </div>
  );
}
