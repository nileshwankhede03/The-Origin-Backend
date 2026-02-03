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

  // handleSubmit function is here
  const handleSubmit = async (e) => 
  {
  e.preventDefault();

  if (editId) {
    await axios.patch(
      `http://localhost:3000/api/notes/${editId}`,
      formData
    );
    setEditId(null);
  } else {
    await axios.post(
      `http://localhost:3000/api/notes`,{
        title: formData.title,
        description: formData.description
      }
    );
  }

  setFormData({});
  fetchNotes();
};

  function handleDeleteNote(noteId) 
  {
    // console.log(noteId);
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
    .then((res)=>{
      // console.log(res.data);
      fetchNotes();
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit} >
        <input name='title' type="text" placeholder='Enter title' required />
        <input name='description' type="text" placeholder='Enter description' required />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {notes.map((element) => (
          <div key={element._id} className="note">
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
