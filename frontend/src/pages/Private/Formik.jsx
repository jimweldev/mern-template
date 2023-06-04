import React from 'react';

// libraries
import { useFormik } from 'formik';

const Formik = () => {
  // login form
  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit: async (values) => {
      console.log(values);
      //   setIsLoginLoading(true);

      //   axios
      //     .post('/auth/login/uptime', values)
      //     .then((res) => {
      //       if (res.data?.verify_login) {
      //         // otp
      //         setIsModalOpen(true);
      //         formikVerify.setFieldValue('user_id', res.data?.user_id);
      //       } else {
      //         dispatch(LOGIN(res.data.token));
      //         dispatch(SET_LAST_LOGIN(res.data.last_login));
      //       }
      //     })
      //     .catch((error) => {
      //       toast.error(error.response?.data.message);
      //     })
      //     .finally(() => {
      //       setIsLoginLoading(false);
      //     });
    },
  });

  return (
    <div>
      <form className="card login mx-auto" onSubmit={loginFormik.handleSubmit}>
        <div className="card-body">
          <h1 className="h2">Login</h1>

          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              className={`form-control form-control-lg ${
                loginFormik.errors.username &&
                loginFormik.touched.username &&
                'invalid'
              }`}
              id="username"
              type="text"
              {...loginFormik.getFieldProps('username')}
            />
            {loginFormik.errors.username && loginFormik.touched.username && (
              <div className="form-text text-danger">
                {loginFormik.errors.username}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              className={`form-control form-control-lg ${
                loginFormik.errors.password &&
                loginFormik.touched.password &&
                'invalid'
              }`}
              id="password"
              type="password"
              {...loginFormik.getFieldProps('password')}
            />
            {loginFormik.errors.password && loginFormik.touched.password && (
              <div className="form-text text-danger">
                {loginFormik.errors.password}
              </div>
            )}
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formik;

// login validation
const loginValidate = (values) => {
  const errors = {};

  // check if username is not empty
  if (!values.username) {
    errors.username = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
  ) {
    errors.username = 'Invalid username format';
  }

  // check if password is not empty
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};
