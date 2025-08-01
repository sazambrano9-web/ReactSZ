import React from 'react';

// Contenedor de formulario
const Formulario = ({ children, onSubmit, className, ...rest }) => (
  <form onSubmit={onSubmit} className={className} {...rest}>
    {children}
  </form>
);

export default Formulario;
