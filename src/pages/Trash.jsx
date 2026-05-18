import React from "react";
import {
  FaTrash,
  FaTrashRestore,
  FaRegStickyNote,
} from "react-icons/fa";
import { useNotes } from "../context/NotesContext";

const getSubjectList = (note) => {
  if (Array.isArray(note.subjects)) return note.subjects;
  if (Array.isArray(note.subject)) return note.subject;
  if (note.subject) return [note.subject];
  return [];
};

function Trash() {
  const { trashNotes, setTrashNotes, notes, setNotes } = useNotes();

  // Restore Note
  const handleRestore = (note) => {
    setNotes([note, ...notes]);

    setTrashNotes(
      trashNotes.filter((item) => item.id !== note.id)
    );
  };

  // Permanent Delete
  const handlePermanentDelete = (id) => {
    setTrashNotes(
      trashNotes.filter((note) => note.id !== id)
    );
  };

  return (
    <div className="min-h-full bg-gray-100 dark:bg-gray-950 p-3 md:p-4 rounded-xl">

      {/* Header */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-5 mb-4 border border-gray-200 dark:border-gray-800">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Trash Notes 🗑️
        </h1>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto leading-6">
          Deleted notes are stored here. You can restore them or permanently
          remove them forever.
        </p>
      </div>

      {/* Trash Notes */}
      {trashNotes.length > 0 ? (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {trashNotes.map((note) => (

            <div
              key={note.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >

              {/* Top */}
              <div>

                <div className="flex items-center justify-between mb-3">

                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
                    <FaRegStickyNote className="text-red-500 text-xl" />
                  </div>

                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {note.date}
                  </span>

                </div>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2 mb-3">

                  {getSubjectList(note).map((subject) => (
                    <span
                      key={subject}
                      className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 text-xs font-semibold"
                    >
                      {subject}
                    </span>
                  ))}

                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {note.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-5">
                  {note.description}
                </p>

              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-4">

                {/* Restore */}
                <button
                  onClick={() => handleRestore(note)}
                  className="w-9 h-9 rounded-lg bg-green-100 hover:bg-green-600 hover:text-white dark:bg-green-500/20 dark:text-green-400 flex items-center justify-center transition-all duration-300"
                >
                  <FaTrashRestore />
                </button>

                {/* Permanent Delete */}
                <button
                  onClick={() => handlePermanentDelete(note.id)}
                  className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-600 hover:text-white dark:bg-red-500/20 dark:text-red-400 flex items-center justify-center transition-all duration-300"
                >
                  <FaTrash />
                </button>

              </div>

            </div>
          ))}

        </div>

      ) : (

        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-md">

          <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-3">
            Trash is Empty
          </h2>

          <p className="text-gray-500 dark:text-gray-400">
            Deleted notes will appear here.
          </p>

        </div>
      )}

    </div>
  );
}

export default Trash;
