import "react";
import { FaLinkedin, FaGithub, FaTwitter, FaDesktop } from "react-icons/fa"; // Importar íconos de redes sociales

function Footer() {
  return (
    <footer className="w-screen bg-dark text-light py-4 absolute bottom-0 left-0 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-6">
        {/* Texto de derechos */}
        <p className="text-sm">&copy; 2024 Sebastian Chicaiza. All rights reserved.</p>

        {/* Iconos de redes sociales */}
        <ul className="flex space-x-4 mt-2 md:mt-0">
          <li>
            <a href="https://www.linkedin.com/in/sebastian-chicaiza/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/SebasChicaiza" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.fiverr.com/s/Ke015p4" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <FaDesktop size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
