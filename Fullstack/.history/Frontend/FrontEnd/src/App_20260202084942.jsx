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
      {notes.map((element , index)=>{
        return element;
      })}

    </>
  )
}

export default App
