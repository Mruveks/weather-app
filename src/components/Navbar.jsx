import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube} from 'react-icons/ai'
const Navbar = () => {

  return (
    <nav className="w-screen">
      <div className="h-20 bg-gray-50 flex justify-between items-center sm:px-10 px-40 text-4xl text-black">
      <NavLink to="/">Weather app</NavLink>
        <div className="flex sm:hidden gap-8 text-2xl ">
          <AiOutlineInstagram />
          <AiOutlineFacebook />
          <AiOutlineTwitter />
          <AiOutlineYoutube />
        </div>
      </div>
      <div className="h-20 flex justify-between bg-blue-500 p-10 sm:px-10 px-40 pr-[50%] items-center text-3xl">
        <NavLink to="/forecast">Forecasts</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/media">Media</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
