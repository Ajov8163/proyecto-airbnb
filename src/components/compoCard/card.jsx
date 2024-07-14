import React from 'react'

const Card = ({imagen, titulo, anfi, precio, noche }) => {
  return (
    <div className='w-[350px]  mt-12'>
        <div>
            <img className='rounded-2xl' src={imagen} alt="" width={400} />
        </div>
        <p className=' flex-wrap font-semibold whitespace-nowrap overflow-hidden text-ellipsis mt-1'>{titulo}</p>
        <p className='opacity-55 font-medium'>Anfitrion: {anfi}</p>
        <div className='flex gap-2 items-center '>
            <p className=' font-semibold'>{precio}</p>
            <p className='opacity-55'>{noche}</p>
        </div>
    </div>
  )
}

export default Card