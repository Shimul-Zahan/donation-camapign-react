import React from 'react'
import Navbar from '../Navbar/Navbar'

const Banner = () => {
  return (
    <div className='h-[765px] bg-cover bg-blend-overlay bg-white bg-opacity-95' style={{ backgroundImage: 'url("/public/Resources/Rectangle 4288.png")' }}>
      <div className='flex justify-center items-center flex-col h-[400px] md:h-[600px] space-y-10'>
        <p className='text-black text-center text-2xl md:text-5xl font-bold'>I Grow By Helping People In Need</p>
        <div className='flex'>
          <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs bg-transparent" />
          <button className='btn btn-success'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Banner