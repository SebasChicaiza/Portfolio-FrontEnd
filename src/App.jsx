import React from "react";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark text-light text-center">      
      <Navbar />
      <div className="max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-primary">¡Bienvenido a mi Portafolio!</h1>
        <p className="mt-4 text-lg text-secondary">
          Este es el frontend en React conectado con Spring Boot.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-dark font-bold rounded-lg shadow-md hover:bg-accent hover:text-white transition">
          Contactar
        </button>
      </div>      
      <img
          src="images/sebasnobk.png"
          alt="Mi Foto"
          className="w-1/6 mt-36 aspect-square object-cover animate-slide-left"
        />
         
    </div>
    
  );
 
}

export default App;
