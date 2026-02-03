import React, { useState } from 'react'

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
  

  return (
    <>
      {notes.map((el))}
      <div className="notes">
        <div className="note">
          <h1>title</h1>
          <p>description</p>
        </div>
      </div>
    </>
  )
}

export default App
