import React, { useEffect, useState } from 'react'

const getSubjectList = (note) => {
    if (Array.isArray(note?.subjects)) return note.subjects
    if (Array.isArray(note?.subject)) return note.subject
    if (note?.subject) return [note.subject]
    return []
}

function AddNoteModal({ isOpen, setIsOpen, notes, setNotes, editingNote, setEditingNote }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        subject: []
    })
    const [isSubjectOpen, setIsSubjectOpen] = useState(false)

    const subjects = ['Physics', 'Chemistry', 'Math', 'Computer']

    useEffect(() => {
        if (editingNote) {
            setFormData({
                title: editingNote.title,
                description: editingNote.description,
                subject: getSubjectList(editingNote)
            })
        } else {
            setFormData({
                title: '',
                description: '',
                subject: []
            })
        }
        setIsSubjectOpen(false)
    }, [editingNote, isOpen])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubjectChange = (subject) => {
        setFormData((prev) => {
            const selectedSubjects = prev.subject.includes(subject)
                ? prev.subject.filter((item) => item !== subject)
                : [...prev.subject, subject]

            return {
                ...prev,
                subject: selectedSubjects
            }
        })
    }

    const handleClose = () => {
        setFormData({
            title: '',
            description: '',
            subject: []
        })
        setIsSubjectOpen(false)
        setEditingNote(null)
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editingNote) {
            setNotes(
                notes.map((note) =>
                    note.id === editingNote.id
                        ? {
                            ...note,
                            title: formData.title,
                            description: formData.description,
                            subject: formData.subject,
                            subjects: formData.subject
                        }
                        : note
                )
            )

            setEditingNote(null)
        } else {
            const newNote = {
                id: Date.now(),
                title: formData.title,
                description: formData.description,
                subjects: formData.subject,
                date: new Date().toLocaleDateString(),
            }

            setNotes([newNote, ...notes])
        }

        setFormData({
            title: '',
            description: '',
            subject: []
        })
        setIsSubjectOpen(false)

        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">

                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">
                    {editingNote ? 'Edit Note' : 'Add New Note'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Subject
                        </label>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsSubjectOpen((prev) => !prev)}
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-left flex items-center justify-between"
                            >
                                <span>
                                    {formData.subject.length > 0
                                        ? formData.subject.join(', ')
                                        : 'Select Subject'}
                                </span>
                            </button>

                            <input
                                type="text"
                                value={formData.subject.join(',')}
                                readOnly
                                required
                                className="sr-only"
                                tabIndex="-1"
                            />

                            {isSubjectOpen && (
                                <div className="absolute left-0 right-0 top-full mt-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg z-10 overflow-hidden">
                                    {subjects.map((subject) => (
                                        <label
                                            key={subject}
                                            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.subject.includes(subject)}
                                                onChange={() => handleSubjectChange(subject)}
                                                className="w-4 h-4 accent-blue-600"
                                            />
                                            <span>{subject}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Note Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter note title..."
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        />
                    </div>



                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Note Description
                        </label>

                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Write your note description..."
                            required
                            rows="5"
                            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3">

                        <button
                            type="button"
                            onClick={handleClose}
                            className="w-full sm:w-auto px-2 py-1 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium transition-all duration-300">
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-full sm:w-auto px-2 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
                            {editingNote ? 'Update Note' : 'Save Note'}
                        </button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default AddNoteModal
