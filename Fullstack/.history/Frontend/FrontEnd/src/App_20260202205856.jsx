import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [notes, setNotes] = useState([]);

  function fetchNotes() 
  {
    
  }




  return (
    <>
      <div className="notes">
        {notes.map((element, index) => (
          <div key={index} className="note">
            <h1>{element.title}</h1>
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
