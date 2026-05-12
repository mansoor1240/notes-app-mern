import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'

function MainLayout({ children, dark, setDark }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      
      <Navbar dark={dark} setDark={setDark} />

      {/* Mobile Hamburger */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-gray-900 text-white p-3 rounded-xl shadow-lg"
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] z-40
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <SideBar />
      </div>

      {/* Main Content */}
      <main className="p-4 lg:p-5 lg:ml-64">
        {children}
      </main>

    </div>
  )
}

export default MainLayout