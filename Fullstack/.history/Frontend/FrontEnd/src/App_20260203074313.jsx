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
    setEditId(note._id);
    setFormData(note);   // pura object form me
  }

  function handleChange(e)
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (editId) {
    await axios.put(`http://localhost:3000/api/notes/${editId}`, formData);
    setEditId(null);
  } else {
    await axios.post(`http://localhost:3000/api/notes`, formData);
  }

  setFormData({});
  fetchNotes();
};


  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit} >
        <input name='title' type="text" placeholder='Enter title' value={FormData.title || ""} onChange={handleChange} />
        <input name='description' type="text" placeholder='Enter description' value={FormData.description || ""} onChange={handleChange} />
        {editId ? "Update Note" : "Create Note"}
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
