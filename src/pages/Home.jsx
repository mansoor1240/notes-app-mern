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
    <div className="min-h-full bg-gray-100 dark:bg-gray-950 p-3 md:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <AddNoteModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        notes={notes}
        setNotes={setNotes}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 md:p-5 mb-4 border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl md:text-2xl sm:text-xl font-bold text-gray-800 dark:text-white text-center">
          Good Morning, Mansoor 👋
        </h2>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto leading-6">
          Welcome back to your notes app. Here you can create, manage, organize,
          and access all your important notes in one beautiful and simple place.
        </p>

        <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
          <button
            onClick={() => {
              setEditingNote(null);
              setIsOpen(true);
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-300 flex items-center gap-2"
          >
            Add Notes
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          {subject ? `${subject} Notes` : "Recent Notes"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
