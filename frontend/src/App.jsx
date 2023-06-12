import React, { lazy } from 'react';

// libraries
import { Routes, Route, Navigate } from 'react-router-dom';

// layouts
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';

const App = () => {
  return (
    <Routes>
      {true ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};

export default App;

/*******************************************
 ***** PUBLIC ROUTES
 *******************************************/
// pages
const Login = lazy(() => import('./pages/Public/Login'));

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
/*******************************************/

/*******************************************
 ***** PRIVATE ROUTES
 *******************************************/
// pages
const Home = lazy(() => import('./pages/Private/Home'));
const Zustand = lazy(() => import('./pages/Private/Zustand'));
const Toast = lazy(() => import('./pages/Private/Toast'));
const Formik = lazy(() => import('./pages/Private/Formik'));
const Modal = lazy(() => import('./pages/Private/Modal'));
const ReactQuery = lazy(() => import('./pages/Private/ReactQuery'));
const Quill = lazy(() => import('./pages/Private/Quill'));

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/react-query" element={<ReactQuery />} />
        <Route path="/quill" element={<Quill />} />
      </Route>

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
/*******************************************/
