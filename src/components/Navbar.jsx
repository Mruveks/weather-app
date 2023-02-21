import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [nav, setActiveNav] = useState('/')

  return (
    <nav className="">
      <div className="h-20 bg-gray-50 flex justify-between items-center px-10 sm:px-40">
        Jello
        <div>
          ig fb twt
        </div>
      </div>
      <div className="h-14 flex justify-between bg-blue-500 p-10 sm:pl-40 sm:pr-[50%] items-center">
        <NavLink>Prognozy</NavLink>
        <NavLink>Wiadomości</NavLink>
        <NavLink>Multimedia</NavLink>
        <NavLink>Inne</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
