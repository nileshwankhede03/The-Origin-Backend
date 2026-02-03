import React, { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState(second)
  return (
    <>
      <div className="notes">
        <div className="note">
          <h1>title</h1>
          <p>description</p>
        </div>
      </div>
    </>
  )
}

export default App
