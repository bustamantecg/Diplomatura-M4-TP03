import React from 'react';
import ProfileSection from './ProfileSection';

const Main = () => {
  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Contenido Principal</h2>
      <p className="text-lg">
        Aquí vamos a colocar el contenido principal de la aplicación. Agregaremos
        textos, imágenes, formularios, etc.
      </p>
      
      <ProfileSection />

    </main>
  );
};

export default Main;
