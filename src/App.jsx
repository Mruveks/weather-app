import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'
import Forecast from './pages/Forecast'
import Footer from './components/Footer'


function App() {

  return (
    <div className="text-white grid overflow-x-hidden mt-28">

      <Navbar />
      <WeatherCard />
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
