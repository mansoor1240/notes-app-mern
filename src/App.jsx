import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Trash from './pages/Trash'
import { NotesProvider } from './context/NotesContext'

function App() {
  return (
    <NotesProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:subject" element={<Home />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </MainLayout>
    </NotesProvider>
  )
}

export default App
