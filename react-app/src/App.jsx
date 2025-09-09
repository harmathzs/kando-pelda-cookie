import { useState } from 'react'

import AddCookie from './AddCookie';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cookies</h1>
      <div className="card">
        <AddCookie />
      </div>
    </>
  )
}

export default App
