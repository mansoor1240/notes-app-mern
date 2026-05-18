import React, { useState } from "react";
import AddNoteModal from "../components/AddNoteModel";
import NoteCard from "../components/NoteCard";
import { useNotes } from "../context/NotesContext";

const getSubjectList = (note) => {
  if (Array.isArray(note.subjects)) return note.subjects;
  if (Array.isArray(note.subject)) return note.subject;
  if (note.subject) return [note.subject];
  return [];
};

const isImportantNote = (note) =>
  note.important === true ||
  note.isImportant === true ||
  note.starred === true ||
  note.favorite === true;

function Important() {
  const { notes, setNotes, trashNotes, setTrashNotes } = useNotes();
  const [isOpen, setIsOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const importantNotes = notes.filter(isImportantNote);

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
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
          Important Notes
        </h1>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto leading-6">
          Your starred and important notes will appear here.
        </p>
      </div>

      {importantNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {importantNotes.map((note) => (
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
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-3">
            No Important Notes
          </h2>

          <p className="text-gray-500 dark:text-gray-400">
            Notes marked as important will show here.
          </p>
        </div>
      )}
    </div>
  );
}

export default Important;
