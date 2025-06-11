import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

function AadharForm() {
  const initialValues = {
    name: '',
    aadharNumber: '',
    phone: '',
    address: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    aadharNumber: Yup.string()
      .matches(/^\d{12}$/, 'Aadhar number must be 12 digits')
      .required('Aadhar number is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone must be 10 digits')
      .required('Phone is required'),
    address: Yup.string().required('Address is required'),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
        // Fetch existing records
        const getResponse = await axios.get('http://localhost:3001/users');
        console.log('promise object sent by axios get request:', getResponse)
        const data = getResponse.data;
        // //Create new object with id and all form values.
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        const newEntry = { id: lastId + 1, ...values };
        // Post the new entry
        const postResponse  = await axios.post('http://localhost:3001/users', newEntry);
        console.log('Post axios promise', postResponse)
        alert('Aadhar Registered Successfully!');
        resetForm();
        console.log('Saved:', postResponse.data);
    } catch (error) {
      alert('Error saving data');
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Aadhar Registration</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" id="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />

          <label htmlFor="aadharNumber">Aadhar Number</label>
          <Field name="aadharNumber" id="aadharNumber" type="text" />
          <ErrorMessage name="aadharNumber" component="div" className="error" />

          <label htmlFor="phone">Phone Number</label>
          <Field name="phone" id="phone" type="text" />
          <ErrorMessage name="phone" component="div" className="error" />

          <label htmlFor="address">Address</label>
          <Field name="address" id="address" as="textarea" />
          <ErrorMessage name="address" component="div" className="error" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AadharForm;
