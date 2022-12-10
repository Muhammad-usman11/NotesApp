
import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

export default function NoteList( { notes, handleAddNote, handleDeleteNote  } ) {



  return (
    <>
    
    <div className="notelist">
        {
          notes.map( (note) => (
            <Note id={ note.id }
              text={ note.text }
              date={ note.date }
              handleDeleteNote={ handleDeleteNote }
            />
          ) )
        }

        <AddNote handleAddNote={ handleAddNote } />
    </div>
    
    </>
  )
}


