import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaStickyNote,FaStar,FaTrash,FaFolder,FaHome} from 'react-icons/fa'

function SideBar() {
  const menuItems = [
    { name: 'All Notes', path: '/', icon: <FaHome /> },
    { name: 'Important Notes', path: '/important', icon: <FaStar /> },
    { name: 'Trash', path: '/trash', icon: <FaTrash /> },
    { name: 'Categories', path: '/categories', icon: <FaFolder /> },
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
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
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
      </ul>
    </div>
  )
}

export default SideBar