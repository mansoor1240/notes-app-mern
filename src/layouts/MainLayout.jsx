import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import { useNotes } from '../context/NotesContext'

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { dark, setDark } = useNotes()

  return (
    <div className="h-screen overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">

      <Navbar dark={dark} setDark={setDark} />

      {/* Mobile Hamburger */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        className={`lg:hidden fixed top-20 z-[70] 
             rounded-xl shadow-lg transition-all duration-500
             w-12 h-12 flex items-center justify-center
                 ${sidebarOpen
            ? 'right-4 bg-white'
            : 'left-4 bg-gray-900 text-white'
          }`}
      >
        <span className="transition-all duration-300">
          {sidebarOpen ? (
            <FaTimes className="text-red-500 text-2xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </span>
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-[55]"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] z-[60]
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <SideBar />
      </div>

      {/* Main Content */}
      <main className="h-[calc(100vh-4rem)] overflow-auto p-3 lg:p-4 lg:ml-64">
        {children || <Outlet />}
      </main>

    </div>
  )
}

export default MainLayout
