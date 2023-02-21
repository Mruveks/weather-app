import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <div className="bg-gray-600 grid w-[170%] sm:w-screen">

      <Navbar />
      <WeatherCard />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
