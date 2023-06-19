import React, { useEffect } from 'react';

import axios from 'axios';

import useAuthUserStore from '../app/authUserStore';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

const RefreshToken = ({ children }) => {
  const { authUser, login, logout } = useAuthUserStore((state) => ({
    authUser: state.authUser,
    login: state.login,
    logout: state.logout,
  }));

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const response = await axios.get('api/auth/refresh', {
          withCredentials: true,
        });

        if (response.status === 200) {
          login(response.data);
        }

        if (response.status === 204) {
          logout();
        }

        return axios(originalRequest);
      }

      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (authUser) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${authUser.accessToken}`;
    } else {
      axios.defaults.headers.common['Authorization'] = null;
    }
  }, [authUser]);

  return <>{children}</>;
};

export default RefreshToken;
