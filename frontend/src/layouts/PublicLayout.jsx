import React, { Suspense } from 'react';

// libraries
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Outlet />
    </Suspense>
  );
};

export default PublicLayout;
