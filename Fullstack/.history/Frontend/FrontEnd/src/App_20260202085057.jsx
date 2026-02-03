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
        return  <div className="notes">
                  <div key={index} className="note">
                    <h1>{element.title}</h1>
                    <p>{element.description}</p>
                  </div>
                </div>
      })}

    </>
  )
}

export default App
