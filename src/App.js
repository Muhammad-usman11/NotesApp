
import './App.css';
import NoteList from './components/NoteList';
import { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Searching from './components/Searching';



function App() {

  const [ notes, setNotes ] = useState( [ 
    {
      id : nanoid(),
      text : "this is first note.",
      date : "04/12/2022"
    },
    {
      id : nanoid(),
      text : "this is seconde note.",
      date : "05/12/2022"
    },
    {
      id : nanoid(),
      text : "this is third note.",
      date : "06/12/2022"
    },
    {
      id : nanoid(),
      text : "this is fourth note.",
      date : "08/12/2022"
    }


   ]
  )

  const [ searchText, setSearchText ] = useState("")

  useEffect( () =>{
    const savedNotes = JSON.parse(
      localStorage.getItem( "react-notes-app" )
    )
    if ( savedNotes ) {
      setNotes( savedNotes )
    }

  }, [] )

  useEffect( () =>{
    localStorage.setItem( "react-notes-app", JSON.stringify( notes ) )
  }, [ notes ] )


  const handleAddNote = ( text ) =>{
    const date = new Date()
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [ ...notes, newNote ]
    setNotes( newNotes )
  }

  const handleDeleteNote = ( id ) =>{
    const newNotes = notes.filter( (note) => note.id !== id )
    setNotes( newNotes )
  }




  return (
    <>
    <div className="section">
      <Searching
        setSearchText={ setSearchText }
      />
      <NoteList notes={ notes.filter( (note) =>
       note.text.toLowerCase().includes( searchText ) ) }
        handleAddNote={ handleAddNote }
        handleDeleteNote={ handleDeleteNote }
      />
    </div>
   
    </>
  );
}

export default App;
