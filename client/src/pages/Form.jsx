import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserData } from '../redux/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from '../components/Header';
import './UserForm.css'; 

function UserForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addUserData(values));
    resetForm();
  };

  return (
    <>
    <Header />
    <div className="user-form-container"> 
      <h2 className="form-heading">User Information Form</h2>
      <Formik
        initialValues={{
          name: '',
          age: '',
          gender: '',
          email: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.age && values.age > 0) {
            errors.age = 'Required';
          }
          if (!values.gender) {
            errors.gender = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => ( // Use isSubmitting to disable the button during submission
          <Form>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="age">Age:</label>
              <Field type="number" id="age" name="age" />
              <ErrorMessage name="age" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="gender">Gender:</label>
              <Field as="select" id="gender" name="gender">
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error-message" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
}

export default UserForm;
