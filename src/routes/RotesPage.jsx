import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/home/Home'
import Programs from '../pages/Programs'
import Layout from '../layout/Layout'

export default function RoutesPage() {
  return (
    <Routes>
      {/* Layout bilan o'ralgan sahifalar */}
      <Route path='/almuamalat' element={<Layout />} >
        <Route path='home' element={<Home />} />
        <Route path='programs' element={<Programs />} />
      </Route>

      {/* Oddiy sahifalar */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      {/* Not found sahifasi */}
      <Route path='*' element={<h1 className='text-4xl text-center'>404 Not Found</h1>} />
    </Routes>
  )
}
