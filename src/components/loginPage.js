import React from 'react';
import { useFormik } from 'formik';

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
    onSubmit: async (values, { setStatus }) => {
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });

        if (!response.ok) throw new Error('Login failed');

        setStatus('Login successful!');
      } catch (error) {
        setStatus('Login failed. Try again.');
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id='email'
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && <div>{formik.errors.password}</div>}
      </div>

      <button type="submit">Login</button>

      {formik.status && <p>{formik.status}</p>}
    </form>
  );
}

export default LoginPage;