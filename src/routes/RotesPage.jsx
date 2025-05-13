import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Programs from '../pages/programs/Programs'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function RoutesPage() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Navigate to='home' replace />} />
        <Route path='home' element={<Home />} />
        <Route path='programs' element={<Programs />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  )
}
