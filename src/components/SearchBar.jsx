import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function SearchBar({ notes = [] }) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const sidebarItems = [
    { name: 'All Notes', path: '/dashboard' },
    { name: 'Important Notes', path: '/important' },
    { name: 'Trash', path: '/trash' },
    { name: 'Physics', path: '/category/Physics' },
    { name: 'Chemistry', path: '/category/Chemistry' },
    { name: 'Math', path: '/category/Math' },
    { name: 'Computer', path: '/category/Computer' },
  ]

  const filteredSidebar = sidebarItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const filteredNotes = notes.filter((note) =>
    note.title?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="relative z-10 w-full md:w-1/3">
      <div className="relative z-10 flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl">
        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-2 w-full bg-transparent outline-none text-gray-700 dark:text-white"
        />
      </div>

      {search && (
        <div className="absolute left-0 top-full z-20 mt-2 w-full max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
          {filteredSidebar.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path)
                setSearch('')
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white"
            >
              📁 {item.name}
            </button>
          ))}

          {filteredNotes.map((note) => (
            <button
              key={note.id}
              onClick={() => {
                navigate(`/note/${note.id}`)
                setSearch('')
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-white"
            >
              📝 {note.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
