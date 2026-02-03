import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [notes, setNotes] = useState([
      {
        title: "test title 1 ",
        description: "test description"
      },
      {
        title: "test title 2",
        description: "test description"
      },
      {
        title: "test title 3",
        description: "test description"
      },
      {
        title: "test title 4",
        description: "test description"
      },
  ]);

  // console.log(notes);
  axios.get('http://localhost:3000/api/notes')
  .then(())

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
