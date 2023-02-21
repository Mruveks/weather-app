import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [nav, setActiveNav] = useState('/')

  return (
    <nav className="grid grid-rows-2 mx-0 text-xl">
      <div className="h-20 bg-gray-100 flex justify-between items-center px-40">
        Jello
        <div>
          ig fb twt
        </div>
      </div>
      <div className="h-14 flex justify-between bg-blue-200 pl-40 pr-[50%] items-center">
        <NavLink>Prognozy</NavLink>
        <NavLink>Wiadomości</NavLink>
        <NavLink>Multimedia</NavLink>
        <NavLink>Inne</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
