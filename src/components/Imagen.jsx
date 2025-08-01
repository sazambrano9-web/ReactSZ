import React from 'react';

// Componente para mostrar una imagen
const Imagen = ({ src, alt, width, height, className, ...rest }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    {...rest}
  />
);

export default Imagen;
