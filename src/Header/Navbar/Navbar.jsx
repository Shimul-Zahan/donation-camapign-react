import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbae.css'

const Navbar = () => {
    return (
        <div className='bg-cover bg-blend-overlay bg-white' style={{ backgroundImage: 'url("/public/Resources/Rectangle 4288.png")' }}>
            <div className='container mx-auto py-6 md:px-2'>
                <div className="flex justify-center items-center flex-col gap-5 md:flex-row md:justify-between md:px-2">
                    <div className="">
                        <img src="/Resources/Logo.png" alt="" />
                    </div>
                    <div className="text-center">
                        <ul className="flex flex-col justify-center items-center gap-5 md:flex-row text-black text-xl space-x-8 text-center">
                            <NavLink to='/' >Home</NavLink>
                            <NavLink to='donation' >Donation</NavLink>
                            <NavLink to='/statistics' >Statistics</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar