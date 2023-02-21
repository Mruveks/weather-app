import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'

function App() {

  return (
    <div className="text-white grid overflow-x-hidden">

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
