import { useFormik } from 'formik';

function LoginForm() {
  const validate = (values) => {
    const errors = {};

    // Email required
    if (!values.email) {
      errors.email = 'Email is required';
    } else {
      // Custom email regex check
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
      if (!emailRegex.test(values.email)) {
        errors.email = 'Email must include only letters, numbers, and special characters like ._%+-@';
      }
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: async (values, { setStatus }) => {
      try {
        const res = await fetch('http://localhost:3001/login');
        const data = await res.json();
        console.log(data)
        const lastId = data.length > 0 ? data[data.length - 1].id : 0;
        const newUser = { id: lastId + 1, ...values };

        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
        });

        if (!response.ok) throw new Error('Failed to save');

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
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && <div>{formik.errors.email}</div>}
      </div>

      <div>
        <label htmlFor='password'>Password</label>
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

export default LoginForm;
