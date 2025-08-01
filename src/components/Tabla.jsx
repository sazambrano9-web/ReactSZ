import React from 'react';

// Tabla básica con cabecera y filas
const Tabla = ({ cabecera = [], datos = [], className, ...rest }) => (
  <table className={`table ${className || ''}`} {...rest}>
    <thead>
      <tr>
        {cabecera.map((c, i) => (
          <th key={i}>{c}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {datos.map((fila, i) => (
        <tr key={i}>
          {fila.map((cel, j) => (
            <td key={j}>{cel}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Tabla;
