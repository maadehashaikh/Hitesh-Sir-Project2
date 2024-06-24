import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Counter App !!</h1>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>Count</button>

    </>
  )
}

export default App
