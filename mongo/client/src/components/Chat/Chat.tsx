import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { sendMessage } from 'api/ws';
import { getMessages } from 'redux/message.slice';
import type { FormikHelpers } from 'formik';

const initialValues = {
  body: '',
};

export default function Chat() {
  const { data } = useSelector((state: any) => state.user);
  const { messages, isLoading, error } = useSelector((state: any) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitForm = (values: typeof initialValues, formikBag: FormikHelpers<typeof initialValues>) => {
    const newMessage = { ...values, author: data?._id };
    sendMessage(newMessage);
    formikBag.resetForm();
  };

  return (
    <div>
      {messages.map((message) => (
        <div key={message._id}>
          <span>
            {message.author.firstName} {message.author.lastName} says:
          </span>
          {message.body}
        </div>
      ))}
      <Formik initialValues={initialValues} onSubmit={submitForm}>
        <Form>
          <Field name="body" />
          <button type="submit">Send message</button>
        </Form>
      </Formik>
    </div>
  );
}
