/**
 * Main Page
 * Shows Rick & Morty logo and expects for teh user start
 * the process
 * 
 * Author Yamil Bracho
 * 2026-Nov-11
 */

import { Link} from 'react-router';
import RickMontyLogo from '../assets/rick-morty-logo.jpg';

export default function MainPage() {


  return (
<main className="flex min-h-screen flex-col items-center justify-center bg-[#1f222a] px-4 py-8 text-white">
      {/* Contenedor central responsivo */}
      <div className="flex w-full max-w-md flex-col items-center text-center">
        
        {/* Título */}
        <h1 className="title">
          Rick And Monty
        </h1>

        {/* Contenedor de la Imagen Responsiva */}
        <div className="logo-div">
          <img
            src={RickMontyLogo} 
            alt="Rick and Morty Portal"
            className="logo"
          />
        </div>

        {/* Botón de navegación */}
        <Link
          to="/characters" // Ajusta la ruta a tu listado de personajes
          className="link"
        >
          Character List
        </Link>

      </div>
    </main>
  )
}
