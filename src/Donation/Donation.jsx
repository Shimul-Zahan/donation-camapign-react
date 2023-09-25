import React from 'react'

const Donation = ({ donation }) => {
  return (
    <div className='w-full border-2 rounded-lg flex justify-start gap-10 items-center' style={{ background: `${donation.card_bg}` }}>
      <img src={donation.image} alt="" className='w-1/3 h-full rounded-lg' />
      <div className='space-y-4 py-2'>
        <p className='w-[100px] text-lg font-medium rounded-lg py-1 text-center' style={{ background: `${donation.category_bg}`, color: `${donation.text_button_bg}` }}>{donation.category}</p>
        <h1 className="text-xl font-bold text-black">{ donation.title }</h1>
        <h1 className="text-xl font-bold text-black" style={{ color: `${donation.text_button_bg}` }}>${ donation.price }.00</h1>
        <button className='btn text-white text-xl capitalize' style={{ background: `${donation.text_button_bg}` }}>View Details</button>
      </div>
    </div>
  )
}

// category_bg
// text_button_bg

export default Donation