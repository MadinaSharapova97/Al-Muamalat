import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'

export default function RoutesPage() {
  return (
    <Routes>
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/home" element={<Home />} />
      
    </Routes>
  )
}
