import React from 'react'
import ProfileCard from './ProfileCard'

const ProfileSection = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-black/90 text-white'>
            <h1 className='text-2xl font-bold mb-6'>Quien esta viendo ahora ?</h1>
            <div className='grid grid-cols-4 gap-6'>
                <ProfileCard />
                <ProfileCard />               
                <ProfileCard />
            <div className='flex flex-col items-center cursor-pointer'>
                <div className='w-24 h-24 flex items-center justify-center bg-gray-700 rounded-lg shadow-md'>
                    <span className='text-4xl font-bold'> + </span>
                </div>
                <p className='mt-2 mb-2 text-sm font-semibold'>Agregar Perfil</p>
            </div>
            </div>
            <button className='mt-2 px-6 py-2 font-semibold bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer'>
               Admnistrar Perfiles 
            </button>            
        </div>
    )
}

export default ProfileSection