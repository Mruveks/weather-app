import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="lg:mt-10 bg-blue-500 w-screen">
      <div className="flex justify-between px-10 py-5 items-center text-4xl border-b-2 border-gray-400">
        <NavLink to="/">Kuba Mrowiec</NavLink>
        <div className="flex sm:hidden gap-8 text-2xl">
          <AiOutlineInstagram />
          <AiOutlineFacebook />
          <AiOutlineTwitter />
          <AiOutlineYoutube />
        </div>
      </div>
      <div className="flex justify-between px-10 py-5">
        <div>2023 Kuba Mrowiec</div>
        <div>Wszelkie prawa zastrzeżone</div>
      </div>
    </footer>
  )
}

export default Footer
