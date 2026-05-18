import React from "react";
import {
  FaRegStickyNote,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function NoteCard({ id, title, description, date, subjects = [], handleEdit, handleDelete }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[210px]">

      {/* Top Section */}
      <div>

        <div className="flex items-center justify-between mb-3">

          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
            <FaRegStickyNote className="text-blue-600 text-xl" />
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>

        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-5">
          {description}
        </p>

      </div>

      {/* Bottom Action Icons */}
      <div className="flex justify-end gap-3 mt-4">

        {/* Subject Tags */}
        <div className="flex flex-wrap gap-2 justify-start items-start w-full">
          {subjects.map((subject) => (
            <span
              key={subject}
              className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 text-xs font-semibold"
            >
              {subject}
            </span>
          ))}
        </div>

        {/* View */}
        <button
          onClick={() => handleEdit({ id, title, description })}
          className="w-9 h-9 rounded-lg bg-blue-100 hover:bg-blue-600 hover:text-white dark:bg-blue-500/20 dark:text-blue-400 flex items-center justify-center transition-all duration-300"
        >
          <FaEdit />
        </button>

        {/* Delete */}
        <button
          onClick={() => handleDelete(id)}
          className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-600 hover:text-white dark:bg-red-500/20 dark:text-red-400 flex items-center justify-center transition-all duration-300"
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
}

export default NoteCard
