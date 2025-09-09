import { useState } from 'react'

import AddCookie from './AddCookie';
import ShowCookies from './ShowCookies';

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
      <div className="card">
        <ShowCookies />
      </div>
    </>
  )
}

export default App
