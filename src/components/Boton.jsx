import React from 'react';

// Botón reutilizable
const Boton = ({ texto, onClick, type = 'button', className, ...rest }) => (
  <button type={type} className={`btn btn-primary ${className || ''}`} onClick={onClick} {...rest}>
    {texto}
  </button>
);

export default Boton;
