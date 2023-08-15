import React from 'react';

const CustomInput = ({ ...props }, ref) => {
  return (
    <>
      <input type="text" ref={ref} {...props} />
    </>
  );
};

export default React.forwardRef(CustomInput);
