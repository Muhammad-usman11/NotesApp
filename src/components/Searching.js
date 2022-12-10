
import React from 'react'
import { MdSearch } from "react-icons/md"

export default function Searching( { setSearchText } ) {


  return (
   <>
   <div className="searching">
    <MdSearch size="1.3em" />
    <input type="text" name="search"
        placeholder="Search..."
        onChange={ (e) => setSearchText( e.target.value ) } 
     
    />  
        
   </div>
   
   </>
  )
}


