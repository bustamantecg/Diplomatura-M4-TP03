import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex flex-col items-center cursor-pointer transition-transform hover:scale-105'>
        <img 
            className='w-24 h-24 rounded-lg shadow-md' 
            src='src/assets/perfil_1.png' 
            alt='Perfil'
        />
        <p className='mt-2 mb-2 text-sm font-semibold'>Profile</p>
    </div>
  )
}

export default ProfileCard