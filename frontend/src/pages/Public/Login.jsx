import React from 'react';
import axios from 'axios';

// libraries
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import useAuthUserStore from '../../app/authUserStore';

const Login = () => {
  const { login } = useAuthUserStore((state) => ({
    login: state.login,
  }));

  // login form
  const loginFormik = useFormik({
    initialValues: {
      emailAddress: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit: async (values) => {
      //   setIsLoginLoading(true);

      axios
        .post('/api/auth/login', values)
        .then((res) => {
          login(res.data);
        })
        .catch((error) => {
          toast.error(error.error);
        })
        .finally(() => {
          // setIsLoginLoading(false);
        });
    },
  });

  return (
    <div>
      <form className="card login mx-auto" onSubmit={loginFormik.handleSubmit}>
        <div className="card-body">
          <h1 className="h2">Login</h1>

          <div className="mb-3">
            <label htmlFor="emailAddress">EmailAddress</label>
            <input
              className={`form-control form-control-lg ${
                loginFormik.errors.emailAddress &&
                loginFormik.touched.emailAddress &&
                'invalid'
              }`}
              id="emailAddress"
              type="text"
              {...loginFormik.getFieldProps('emailAddress')}
            />
            {loginFormik.errors.emailAddress &&
              loginFormik.touched.emailAddress && (
                <div className="form-text text-danger">
                  {loginFormik.errors.emailAddress}
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

export default Login;

// login validation
const loginValidate = (values) => {
  const errors = {};

  // check if emailAddress is not empty
  if (!values.emailAddress) {
    errors.emailAddress = 'Required';
  }

  // check if password is not empty
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};
