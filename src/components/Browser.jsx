import React from 'react'
import { BsFillSearchHeartFill } from 'react-icons/bs'

const Browser = () => {
  return (
    <>
      <h3 className='text-3xl font-normal text-center mt-8'>More than 800 pokemons, choose your favorite :)</h3>
      <section className='flex justify-center items-center gap-6 py-1 mt-4'>
        <input type="text" placeholder="Search your pokemon" className='bg-gray-200 border-gray-300 rounded-lg p-3 flex-[.4] outline-none text-lg shadow-md' />
        <button className='bg-orange-500 p-3 rounded-md border-none shadow-md shadow-gray-400 flex items-center justify-center gap-1 transition-all duration-500 hover:scale-105 hover:bg-orange-600 hover:text-gray-100'><BsFillSearchHeartFill /> Search Pokemon</button>
      </section>
    </>
  )
}

export default Browser


