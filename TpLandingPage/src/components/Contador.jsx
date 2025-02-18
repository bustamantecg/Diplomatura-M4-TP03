import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // Estado inicial en 0

  return (
    <div className="px-2.5">
      <h1 className="text-2xl font-bold mb-4 text-center">Contador: {contador}</h1>
      
      <div className="flex space-x-4">
        <button
          onClick={() => setContador(contador + 1)}
          className="px-4 py-2 bg-green-500 hover:bg-green-700 rounded-lg"
        >
          Incrementar
        </button>

        <button
          onClick={() => setContador(contador - 1)}
          className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg"
        >
          Decrementar
        </button>

        <button
          onClick={() => setContador(0)}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 rounded-lg"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Contador;
