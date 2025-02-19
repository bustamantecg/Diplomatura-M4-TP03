import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import perfil_1 from "/src/assets/perfil_1.png";

const Bienvenido = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const handleCloseMessage = () => {
    setShowWelcomeMessage(false);
  };

  return (
    <header className="bg-sky-500 text-white py-4">
      <div className="container mx-auto text-center">
        {/* Contenedor de la imagen y mensaje */}
        <AnimatePresence>
          {showWelcomeMessage && (
            <>
              {/* Imagen animada con efecto de salida */}
              <motion.img
                src={perfil_1}
                alt="Bienvenido"
                className="mx-auto rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }} // Animación de salida
                transition={{ duration: 0.5 }}
              />

              {/* Mensaje animado con efecto de salida */}
              <motion.div
                className="bg-black text-yellow-500 border border-yellow-500 rounded-md p-4 mt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} // Animación de salida
                transition={{ duration: 0.5 }}
              >
                <p>Bienvenido Carlos. Espero que disfrutes de nuestro amplio catálogo de películas.</p>
                <button
                  className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer mt-2"
                  onClick={handleCloseMessage}
                >
                  Cerrar mensaje
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Bienvenido;

