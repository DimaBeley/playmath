import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'
import { MultiplicationGame } from './pages/MultiplicationGame'
import { GameConfigurationPage } from './pages/GameConfiguration'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gameConfiguration" element={<GameConfigurationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/multiplicationGame" element={<MultiplicationGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
