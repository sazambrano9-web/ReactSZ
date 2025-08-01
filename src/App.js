import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Boton from './components/Boton';
import InputText from './components/InputText';
import InputEmail from './components/InputEmail';
import InputPassword from './components/InputPassword';
import Tabla from './components/Tabla';

function App() {
  // estados de los campos
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');

  // lista de envíos
  const [lista, setLista] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('usuarios')) || [];
    } catch {
      return [];
    }
  });

  // cada vez que cambia la lista, la guardo en localStorage
  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(lista));
  }, [lista]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones simples
    if (nombre.trim().length < 3) {
      alert('Nombre muy corto');
      return;
    }
    if (!email.includes('@')) {
      alert('Correo inválido');
      return;
    }
    if (clave.length < 6) {
      alert('Contraseña muy corta');
      return;
    }

    // crear nuevo objeto
    const nuevo = {
      nombre: nombre.trim(),
      email: email.trim(),
      clave, // no guardar la clave en texto plano en producción
    };

    setLista((prev) => [...prev, nuevo]);

    // limpiar campos
    setNombre('');
    setEmail('');
    setClave('');
  };

  return (
    <div className="container mt-4">
      <Titulo texto="Mi formulario y lista" nivel={2} />
      <Parrafo texto="Lleno el formulario y abajo se ve lo que envié." />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <InputText
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            minLength={3}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <InputEmail
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <InputPassword
            placeholder="6+ caracteres"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <Boton texto="Enviar" type="submit" />
      </form>

      <div className="mt-5">
        <Titulo texto={`Usuarios enviados (${lista.length})`} nivel={3} />
        {lista.length === 0 ? (
          <Parrafo texto="Aún no he enviado nada." />
        ) : (
          // usando el componente Tabla
          <Tabla
            cabecera={['Nombre', 'Correo', 'Contraseña']}
            datos={lista.map((u) => [
              u.nombre,
              u.email,
              '*'.repeat(u.clave.length), // no mostrar la clave real
            ])}
          />

          // // se usa una tabla HTML normal:
          // <table className="table">
          //   <thead>
          //     <tr>
          //       <th>Nombre</th>
          //       <th>Correo</th>
          //       <th>Contraseña</th>
          //     </tr>
          //   </thead>
          //   <tbody>
          //     {lista.map((u, i) => (
          //       <tr key={i}>
          //         <td>{u.nombre}</td>
          //         <td>{u.email}</td>
          //         <td>{'*'.repeat(u.clave.length)}</td>
          //       </tr>
          //     ))}
          //   </tbody>
          // </table>
        )}
      </div>
    </div>
  );
}

export default App;

