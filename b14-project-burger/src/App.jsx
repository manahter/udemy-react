import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Wrong from './components/Wrong'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contact' exact element={<Contact />} />

        <Route path='*' exact element={<Wrong />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
