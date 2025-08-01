import React from 'react';

// Enlace <a>
const Enlace = ({ href, texto, target = '_blank', rel = 'noreferrer', className, ...rest }) => (
  <a href={href} target={target} rel={rel} className={className} {...rest}>
    {texto}
  </a>
);

export default Enlace;
