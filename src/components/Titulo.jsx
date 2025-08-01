import React from 'react';

// Recibe el texto y el nivel (h1 a h6)
const Titulo = ({ texto, nivel = 1, className, ...rest }) => {
  const Tag = `h${nivel}`; // construyo h1, h2, etc.
  return (
    <Tag className={className} {...rest}>
      {texto}
    </Tag>
  );
};

export default Titulo;

