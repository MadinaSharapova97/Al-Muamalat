import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// pages
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Programs from '../pages/programs/Programs'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/profile/Profile'
import Courses from '../pages/courses/Courses'
import Contact from '../pages/contact/Contact'

export default function RoutesPage() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Navigate to='home' replace />} />
        <Route path='home' element={<Home />} />
        <Route path='programs' element={<Programs />} />
        {
          localStorage.getItem("testUserToken") ? (
          <Route path='profile' element={<Profile />} />
        ) : (
          <Route path='profile' element={<Navigate to='/login' replace />} />
        )
        }
        <Route path='courses' element={<Courses />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  )
}
