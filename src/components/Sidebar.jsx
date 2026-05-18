import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaStickyNote, FaStar, FaTrash, FaFolder,
  FaHome,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'

function SideBar() {

  const [openCategory, setOpenCategory] = useState(false)

  const menuItems = [
    { name: 'All Notes', path: '/dashboard', icon: <FaHome /> },
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
    <div className="w-full h-full bg-gray-900 dark:bg-gray-800 text-white p-5 ">

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
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl
            bg-gradient-to-r from-gray-800 to-gray-900
            border border-gray-700 text-gray-200
           hover:border-blue-500 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm">
                <FaFolder />
              </div>

              <div className="text-left">
                <p className="font-medium text-sm">Categories</p>
                <p className="text-[10px] text-gray-400">
                  {subjects.length} Subjects
                </p>
              </div>
            </div>

            <span
              className={`text-sm transition-transform duration-300 ${openCategory ? 'rotate-180' : ''
                }`}
            >
              <FaChevronDown />
            </span>
          </button>

          {openCategory && (
            <div className="mt-2 ml-2 rounded-xl bg-gray-800/70 border border-gray-700 p-2 space-y-1">
              {subjects.map((subject) => (
                <NavLink
                  key={subject}
                  to={`/category/${subject}`}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all duration-300
            ${isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`
                  }
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {subject}
                  </span>

                  <span className="text-[10px] bg-gray-900/60 px-1.5 py-0.5 rounded-full">
                    Notes
                  </span>
                </NavLink>
              ))}
            </div>
          )}
        </li>

      </ul>
    </div>
  )
}

export default SideBar
