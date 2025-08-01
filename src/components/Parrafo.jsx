import React from 'react';

// Parrafo simple
const Parrafo = ({ texto, className, ...rest }) => (
  <p className={className} {...rest}>
    {texto}
  </p>
);

export default Parrafo;
