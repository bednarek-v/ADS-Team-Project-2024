import React from 'react';

const NoteList =  ({notes, updateNotes, displayNotes}) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: 'DELETE'
            }
            const response = await fetch(`http://127.0.0.1:5000/${job_id}/delete-note/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete job offer")
            }
        } catch (error) {
            alert(error)
        }
    }

    const createNote = async (job_id)    => {

        return (<form onSubmit={onSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={title}
            />
        </div>
        <div>
            <label htmlFor="note">Company</label>
            <input
                type="text"
                id="note"
                value={note}
            />
        </div>
            </form>
        )

    }

    return (
        <div className="note-list">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Note</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {notes.map((note) => (
                    <tr key={note.id}>
                        <td>{note.title}</td>
                        <td>{note.note}</td>
                        <td>
                            <button onClick={() => updateNotes(note)}>Update</button>
                            <button onClick={() => onDelete(note.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => createNote(job_id)}>Create new note</button>
        </div>
    )
}

export default NoteList