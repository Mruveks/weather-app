import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-gray-600">
      <Navbar />
      <div className="mx-40">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
