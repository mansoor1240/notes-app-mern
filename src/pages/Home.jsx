import React from 'react'
import NoteCard from '../components/NoteCard'

function Home() {

  const notes = [
    {
      id: 1,
      title: "Meeting Notes",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem",
      date: "Today"
    },

    {
      id: 2,
      title: "React Learning",
      description: "Practice hooks, props, and React Router concepts.",
      date: "Yesterday"
    },

    {
      id: 3,
      title: "Backend API",
      description: "Create CRUD APIs using Node.js and MongoDB.",
      date: "Monday"
    },

    {
      id: 4,
      title: "UI Design",
      description: "Improve dashboard and sidebar layout design.",
      date: "Sunday"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">

      {/* Welcome Section */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl md:text-4xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Good Morning, Mansoor 👋
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-7">
          Welcome back to your notes app. Here you can create, manage, organize,
          and access all your important notes in one beautiful and simple place.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">

          {/* Create Note */}
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all duration-300 flex items-center gap-2">

            Create Notes
          </button>

          {/* View Notes */}
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-xl transition-all duration-300 flex items-center gap-2">

            View Notes
          </button>

        </div>

      </div>

      {/* Notes Section */}
      <div>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Recent Notes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {notes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              description={note.description}
              date={note.date}
            />
          ))}

        </div>

      </div>
    </div>
  )
}

export default Home