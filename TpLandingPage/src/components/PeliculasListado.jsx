import { useState } from "react";

const peliculas = [
  { id: 1, titulo: "La batalla de Riddick: Pitch Black" },
  { id: 2, titulo: "Cómo sobrevivimos a la caída de los Black Hawk" },
  { id: 3, titulo: "El juego del calamar I" },
  { id: 4, titulo: "El juego del calamar II" },
];

function PeliculaListado() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="text-center">
      <button
        onClick={() => setMostrar(!mostrar)}
        className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg cursor-pointer"
      >
        {mostrar ? "Ocultar Películas" : "Mostrar Películas"}
      </button>

      {mostrar && (
        <ul className="bg-gray-800 p-4 rounded-lg text-left">
          {peliculas.map((pelicula) => (
            <li key={pelicula.id} className="p-2 border-b last:border-b-0">
              {pelicula.id}) {pelicula.titulo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PeliculaListado;
