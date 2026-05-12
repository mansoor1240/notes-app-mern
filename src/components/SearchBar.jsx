import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md w-1/3">
      <FaSearch className="text-gray-500 bo" />
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 w-full bg-transparent outline-none text-gray-700 dark:text-white"
      />
    </div>
  )
}

export default SearchBar