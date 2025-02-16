import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-dark text-light fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary">
          MiPortafolio
        </a>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-primary transition">Inicio</a></li>
          <li><a href="#about" className="hover:text-primary transition">Sobre Mí</a></li>
          <li><a href="#projects" className="hover:text-primary transition">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-primary transition">Contacto</a></li>
        </ul>

        {/* Botón de Menú en Pantallas Pequeñas */}
        <button
          className="md:hidden text-primary focus:outline-none bg-dark"          
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú Móvil */}
      <div
        className={`md:hidden bg-dark absolute top-16 left-0 w-full flex flex-col items-center transition-all ${
          menuOpen ? "h-auto py-4" : "h-0 overflow-hidden"
        }`}
      >
        <a href="#" className="py-2 hover:text-primary">Inicio</a>
        <a href="#about" className="py-2 hover:text-primary">Sobre Mí</a>
        <a href="#projects" className="py-2 hover:text-primary">Proyectos</a>
        <a href="#contact" className="py-2 hover:text-primary">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
