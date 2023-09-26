import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbae.css'

const Navbar = () => {
    return (
        <div className='container mx-auto md:py-4'>
            <div className="navbar">
                <div className="flex-1">
                    <div className="">
                        <img src="/Resources/Logo.png" alt="" className='h-10 md:h-16 lg:h-full' />
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className='hidden md:block'>
                            <div className='flex justify-center gap-10 items-center text-xl'>
                                <NavLink to='/' >Home</NavLink>
                                <NavLink to='donation' >Donation</NavLink>
                                <NavLink to='/statistics' >Statistics</NavLink>
                            </div>
                        </div>
                        <div className='md:hidden text-xl'>
                            <li>
                                <details>
                                    <summary>
                                        Menubar
                                    </summary>
                                    <ul className="p-2 pt-2 absolute flex flex-col space-y-3">
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='donation' >Donation</NavLink>
                                        <NavLink to='/statistics' >Statistics</NavLink>
                                    </ul>
                                </details>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar