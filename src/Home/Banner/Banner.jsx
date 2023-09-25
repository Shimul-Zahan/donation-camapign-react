import React from 'react'

const Banner = ({ searchInput, searchvalue }) => {

  return (
    <div className='h-full bg-cover bg-blend-overlay bg-white bg-opacity-95' style={{ backgroundImage: 'url("/Resources/cover.png")' }}>
      <div className='flex justify-center items-center flex-col h-[400px] md:h-[600px] space-y-10'>
        <p className='text-black text-center text-2xl md:text-5xl font-black'>I Grow By Helping People In Need</p>
        <div className='flex input input-bordered w-[286px] max-w-xs justify-between items-center'>
          <input onChange={(e) => searchInput(e.target.value)} type="text" placeholder="Search here..." className=" outline-none border-none" />
          <button onClick={searchvalue} className='bg-[#FF444A] py-3 px-5 rounded-tr-lg rounded-br-lg text-base text-white'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Banner