import React from 'react';
import ProfileSection from './ProfileSection';
import PeliculaListado from './PeliculasListado';
import Contador from './Contador';

const Main = () => {
  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Contenido Principal</h2>
 
      <ProfileSection />         
      
      <div className="flex flex-col items-center  bg-blue-900 text-white py-2">
        <h1 className="text-2xl font-bold mb-4">Listado de Películas</h1>
        <PeliculaListado />
        <Contador />
      </div>
      
    </main>
  );
};

export default Main;
