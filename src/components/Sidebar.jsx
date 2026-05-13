import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaStickyNote,FaStar, FaTrash,FaFolder,
  FaHome,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

function SideBar() {

  const [openCategory, setOpenCategory] = useState(false)

  const menuItems = [
    { name: 'All Notes', path: '/', icon: <FaHome /> },
    { name: 'Important Notes', path: '/important', icon: <FaStar /> },
    { name: 'Trash', path: '/trash', icon: <FaTrash /> },
  ]

  const subjects = [
    'Physics',
    'Chemistry',
    'Math',
    'Computer'
  ]


  return (
    <div className="w-full h-full bg-gray-900 dark:bg-gray-800 text-white p-5">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <FaStickyNote />
        </div>

        <h1 className="text-2xl font-bold">
          Notes App
        </h1>
      </div>

      {/* Menu */}
      <ul className="space-y-3">

        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}

        {/* Categories Dropdown */}
        <li>
          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-300 bg-gray-900/40 hover:bg-gray-800 hover:text-white transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <FaFolder />
              </span>

              <span className="font-medium">Categories</span>
            </div>

            <span className="text-gray-400 group-hover:text-white transition-all duration-300">
              {openCategory ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>

          {/* Dropdown Items */}
          {openCategory && (
            <ul className="ml-4 mt-3 space-y-2 border-l border-gray-700 pl-4">
              {subjects.map((subject) => (
                <li key={subject}>
                  <NavLink
                    to={`/category/${subject}`}
                    className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
                  >
                    {subject}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>

      </ul>
    </div>
  )
}

export default SideBar