import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div>

      <MainLayout dark={dark} setDark={setDark}>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </MainLayout>

    </div>
  )
}

export default App
