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

  function handleSubmit(e) 
  {
    e.preventDefault();
  
    // console.log(e);
    console.log(e.target.elements.title.value); // he title input box madhe lihlela denar
    console.log(e.target.elements.description.value); // he description input box madhe lihlela denar

    axios.post('http://localhost:3000/api/notes',{
      title : e.target.elements.title.value,
      description : e.target.elements.description.value
    })
    .then((res)=>{ // success
      // console.log(res.data);
      e.target.elements.title.value = "";
      e.target.elements.description.value = "";
      fetchNotes(); // dala aala ki lagech GET houn show hoil so for this fns call is there
    })
    .catch((err)=>{ // failure
      console.log(err);
    })
  }

  function handleDeleteNote(id) 
  {
    log
  }

  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit} >
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create note</button>
      </form>

      <div className="notes">
        {notes.map((element, index) => (
          <div key={index} className="note">
            <h1>{element.title}</h1>
            <p>{element.description}</p>
            <button onClick={()=>handleDeleteNote(element._id)} >DELETE</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
