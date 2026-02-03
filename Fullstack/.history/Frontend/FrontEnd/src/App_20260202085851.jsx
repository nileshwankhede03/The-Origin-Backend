import React, { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState([]);

  // console.log(notes);
  

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
