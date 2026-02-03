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

  // function patchPartialDataHandler() 
  // {
  //   axios.patch(`http://localhost:3000/api/notes/:id`)
  // }
  http://localhost:3000/api/not
  )
}

export default App
