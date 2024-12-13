// Importar React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importar el componente principal de la aplicacion
import './index.css'; // Importar estilos globales

// Crear un contenedor para la aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar el componente App dentro del contenedor root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);