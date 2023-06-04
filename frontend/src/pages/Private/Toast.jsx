import React from 'react';

// libraries
import { toast } from 'react-toastify';

const Toast = () => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          toast('Normal!');
          toast.success('Success!');
          toast.error('Error!');
        }}
      >
        Toast
      </button>
    </>
  );
};

export default Toast;
