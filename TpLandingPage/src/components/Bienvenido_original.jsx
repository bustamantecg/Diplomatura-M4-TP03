import React, { useState } from 'react';

const Bienvenido = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const handleCloseMessage = () => {
    setShowWelcomeMessage(false);
  };

  return (
    <header className="bg-sky-500 text-white py-4">
      <div className="container mx-auto text-center">
        {showWelcomeMessage && (
          <div className="bg-white text-sky-500 border border-sky-400 rounded-md p-4 mt-4">
            <p>¡Hola! Bienvenido a mi aplicación. Espero que la disfrutes.</p>
            <button
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              onClick={handleCloseMessage}
            >
              Cerrar mensaje
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Bienvenido;
