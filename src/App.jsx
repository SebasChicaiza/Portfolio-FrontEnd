import "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col-reverse md:flex-row items-center md:justify-between sm:justify-center bg-dark text-light text-center md:text-left px-6 overflow-hidden">
      <Navbar />

      {/* Contenedor de texto */}
      <div className="md:ml-36 max-w-4xl px-6 md:w-1/2 text-center">
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-primary">Sebas!</span>
          <span className="text-primary animate-bounce"> 🎯</span>
        </h1>

        <div className="flex flex-col text-3xl text-light font-bold mt-5 items-center">
          <span>A Systems Engineering student,</span>
          <span>Software Developer and Cybersecurity Specialist.</span>
        </div>

        <button className="mt-6 px-6 py-3 bg-primary text-dark font-bold rounded-lg shadow-md hover:bg-secondary hover:text-white transition">
          Ver Proyectos
        </button>
      </div>
     {/* Contenedor de imagen */}
     <div className="-ml-2.5 md:w-1/2 flex justify-center md:fixed md:right-0 sm:mt-5 sm:mb-5">
        <img
          src="images/FotoSebas3.png"
          alt="Mi Foto"
          className="w-7/12 sm:w-6/12 object-cover object-top rounded-lg animate-slide-left"
        />
      </div>
      
     


      <Footer />
    </div>

  );

}

export default App;
