import React, { createContext, useContext, useEffect, useState } from "react";

const NotesContext = createContext();


export function NotesProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : defaultNotes;
  });

  const [trashNotes, setTrashNotes] = useState(() => {
    const savedTrash = localStorage.getItem("trashNotes");
    return savedTrash ? JSON.parse(savedTrash) : [];
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
  }, [trashNotes]);

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        trashNotes,
        setTrashNotes,
        dark,
        setDark,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useNotes must be used inside NotesProvider");
  }

  return context;
}
