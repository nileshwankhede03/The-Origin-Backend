import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [notes, setNotes] = useState([]);

  axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    // console.log(res.data);
    const {notes} = res.data;
    setNotes(notes);
  })


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
