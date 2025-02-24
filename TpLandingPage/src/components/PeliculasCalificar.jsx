import { useState } from "react";
import { motion } from "framer-motion"; 

function PeliculasCalificar() {
  const [contador, setContador] = useState(0);
  const [rotacion, setRotacion] = useState({ incrementar: 0, decrementar: 0, reiniciar: 0 });

  return (
    <div className="px-2.5 m-3">
      <div className="flex space-x-4 justify-center">
      <p className="px-2 py-2 font-bold text-center">Puntuación: {contador}</p>
        {/* Botón Incrementar con animación individual */}
        <motion.button
          onClick={() => {
            setContador(contador + 1);
            setRotacion({ ...rotacion, incrementar: rotacion.incrementar + 360 });
          }}
          animate={{ rotate: rotacion.incrementar }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 bg-green-500 hover:bg-green-700 rounded-lg font-bold cursor-pointer"
        >
          +
        </motion.button>

        {/* Botón Decrementar con animación individual */}
        <motion.button
          onClick={() => {
            setContador(contador - 1);
            setRotacion({ ...rotacion, decrementar: rotacion.decrementar - 180 });
          }}
          animate={{ rotate: rotacion.decrementar }}
          transition={{ duration: 0.5 }}
          className="px-4 bg-red-500 hover:bg-red-700 rounded-lg font-bold cursor-pointer"
        >
          -
        </motion.button>

        {/* Botón Reiniciar con animación individual */}
        <motion.button
          onClick={() => {
            setContador(0);
            setRotacion({ ...rotacion, reiniciar: rotacion.reiniciar + 360 });
          }}
          animate={{ rotate: rotacion.reiniciar }}
          transition={{ duration: 0.5 }}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 rounded-lg font-bold cursor-pointer"
        >
          0
        </motion.button>
      </div>
    </div>
  );
}

export default PeliculasCalificar