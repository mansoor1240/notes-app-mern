import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import AddNoteModal from "../components/AddNoteModel";
import { useNotes } from "../context/NotesContext";

const getSubjectList = (note) => {
  if (Array.isArray(note.subjects)) return note.subjects;
  if (Array.isArray(note.subject)) return note.subject;
  if (note.subject) return [note.subject];
  return [];
};

function Home() {
  const { subject } = useParams();
  const { notes, setNotes, trashNotes, setTrashNotes } = useNotes();

  const [isOpen, setIsOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const filteredNotes = subject
    ? notes.filter((note) => getSubjectList(note).includes(subject))
    : notes;

  const handleDelete = (id) => {
    const noteToTrash = notes.find((note) => note.id === id);

    if (!noteToTrash) return;

    setTrashNotes([noteToTrash, ...trashNotes]);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <AddNoteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        notes={notes}
        setNotes={setNotes}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl md:text-4xl sm:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Good Morning, Mansoor 👋
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-7">
          Welcome back to your notes app. Here you can create, manage, organize,
          and access all your important notes in one beautiful and simple place.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <button
            onClick={() => {
              setEditingNote(null);
              setIsOpen(true);
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all duration-300 flex items-center gap-2"
          >
            Add Notes
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {subject ? `${subject} Notes` : "Recent Notes"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                subjects={getSubjectList(note)}
                date={note.date}
                handleEdit={() => handleEdit(note)}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No notes found in this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
