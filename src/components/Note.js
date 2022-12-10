
import React from 'react'
import {MdDeleteForever } from "react-icons/md"

export default function Note( { id, text, date, handleDeleteNote  } ) {



  return (
   <>
   <div className="notebody">
    <div className="text">
        <span> { text } </span>
    </div>
    <div className="notefooter">
        <p> { date } </p>
        <MdDeleteForever onClick={ () => handleDeleteNote(id) } size="1.4em" />
    </div>
   </div>
   
   </>
  )
}



