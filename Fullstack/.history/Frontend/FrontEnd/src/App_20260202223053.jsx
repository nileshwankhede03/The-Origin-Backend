import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [notes, setNotes] = useState([]);

  console.log("Hello Integration");

  function fetchNotes() 
  {
    axios.get('http://localhost:3000/api/notes')
    .then((res)=>{
      // console.log(res.data.notes);
      const {notes} = res.data;
      setNotes(notes);
    })
  }

  useEffect(()=>{
    fetchNotes() 
  },[]);

  function handleSubmit(params) {
    
  }


  return (
    <>
      <form className='note-create-form'  >
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create note</button>
      </form>

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
