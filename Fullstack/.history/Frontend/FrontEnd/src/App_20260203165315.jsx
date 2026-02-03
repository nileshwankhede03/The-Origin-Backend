import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [ notes, setNotes ] = useState([])

  console.log("hello Integration")

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        setNotes(res.data.notes)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        console.log(res.data)

        fetchNotes()
        
      })

  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  function handlePatchNote(noteId , newDescription) 
  {
    console.log("handler side : ",newDescription);
    
    axios.patch("http://localhost:3000/api/notes/"+noteId,{
      description: newDescription
    })
    .then((res)=>{
      console.log(res.data);
      fetchNotes();
    })
  }


  return (
    <>

      <form className='note-create-form' onSubmit={handleSubmit}  >
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter description' />
        <button>Create note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div key={note._id} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{ 

                const newDesc = prompt("Enter new description", note.description);
                console.log(newDesc);
                
                if(newDesc) // handled for truthy values only via prompt
                {
                  handlePatchNote(note._id, newDesc)
                }
              }} >
                Edit
              </button>
              <button onClick={()=>{handleDeleteNote(note._id)}} >delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App