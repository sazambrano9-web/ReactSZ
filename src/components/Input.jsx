import React from 'react';

// Input genérico
const Input = ({ type = 'text', placeholder, value, onChange, className, ...rest }) => (
  <input
    type={type}
    className={`form-control ${className || ''}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    {...rest}
  />
);

export default Input;
