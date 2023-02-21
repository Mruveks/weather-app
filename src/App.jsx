import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import WeatherCard from './components/WeatherCard'
import Media from './pages/Media'
import News from './pages/News'
import Forecast from './pages/Forecast'

function App() {

  return (
    <div className="text-white grid overflow-x-hidden">

      <Navbar />
      <WeatherCard />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/news" element={<News />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
