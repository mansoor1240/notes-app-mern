import React, { useState } from 'react'
import { FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'
import SearchBar from './SearchBar'

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDark(!dark)
  }

  return (
    <div className="w-full h-16 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between px-6 sticky top-0 z-10">

      {/* Search Bar */}
      <SearchBar />

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="text-xl text-gray-700 dark:text-white"
        >
          {dark ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon />
          )}
        </button>

        {/* Profile Dropdown */}
        <div className="relative">

          {/* Profile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <FaUserCircle className="text-2xl text-gray-600 dark:text-white" />

            <span className="text-gray-700 dark:text-white">
              User
            </span>
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-fadeIn">

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
                Profile
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
                Settings
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white dark:text-white">
                Logout
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Navbar