
import React from 'react'
import {useState } from "react"

export default function AddNote( { handleAddNote } ) {

    const [noteText, setNoteText ] = useState(" ")
    const charLimit = 300
    
    const handleChange = (e ) => {
        if ( charLimit - e.target.value.length >= 0 ){
            setNoteText( e.target.value )
        }
    }

    const handleSave = () => {
        if ( noteText.trim().length > 0 ){
            handleAddNote( noteText )
            setNoteText(" ")
        }
    }


  return (
    <>
    <div className="notebody addnote">
        <textarea placeholder="type your text..." 
         value={noteText }
         onChange={handleChange }
         name="newnote"  cols="10" rows="8"
        ></textarea>

        <div className="notefooter">
            <small> { charLimit - noteText.length } Remaining </small>
            <button onClick={ handleSave } > 
                Save
            </button>
        </div>
    </div>
    
    </>
  )
}


