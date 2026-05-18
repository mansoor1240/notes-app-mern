import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Register'
import Trash from './pages/Trash'
import Important from './pages/Important'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <Routes>

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/important" element={<Important />} />
          <Route path="/category/:subject" element={<Home />} />
          <Route path="/trash" element={<Trash />} />

        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/signup" />} />

    </Routes>
  )
}

export default App
