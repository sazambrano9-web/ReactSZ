import React from 'react';

// Lista desordenada
const Lista = ({ elementos = [], className, ...rest }) => (
  <ul className={className} {...rest}>
    {elementos.map((el, i) => (
      <li key={i}>{el}</li>
    ))}
  </ul>
);

export default Lista;
