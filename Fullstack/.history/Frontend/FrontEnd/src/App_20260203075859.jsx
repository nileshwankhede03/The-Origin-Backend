import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({});
  const [editId, setEditId] = useState(null);

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

    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;

    if (editId) {
      // UPDATE
      axios.put(`http://localhost:3000/api/notes/${editId}`, {
        title,
        description,
      })
      .then(() => {
        setEditId(null);
        e.target.reset();
        fetchNotes();
      });

    } else {
      // CREATE (tumhara existing)
      axios.post('http://localhost:3000/api/notes', {
        title,
        description,
      })
      .then(() => {
        e.target.reset();
        fetchNotes();
      });
    }
  }


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

  function handleEdit(note) // backend madhun full specific id ne data yet hota 
  {
    // console.log(note);
    document.getElementsByName("title")[0].value = note.title;
    document.getElementsByName("description")[0].value = note.description;

    setEditId(note._id);
  }

  function handleChange(e)
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  

  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit} >
        <input name='title' type="text" placeholder='Enter title' value={formData.title || ""} onChange={handleChange} />
        <input name='description' type="text" placeholder='Enter description' value={formData.description || ""} onChange={handleChange} />
        <button>{editId ? "Update Note" : "Create Note"}</button>
      </form>

      <div className="notes">
        {notes.map((element) => (
          <div key={element._id} className="note">
            <h1>{element.title}</h1>
            <p>{element.description}</p>
            <button onClick={()=>{handleEdit(element)}}>EDIT</button>
            <button onClick={()=>handleDeleteNote(element._id)} >DELETE</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
