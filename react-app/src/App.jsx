import { useState } from 'react'

import AddCookie from './AddCookie';
import ShowCookies from './ShowCookies';
import ClearCookies from './ClearCookies';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [cookieStr, setCookieStr] = useState(document.cookie);
  const refreshCookies = () => setCookieStr(document.cookie);

  return (
    <>
      <h1>Cookies</h1>
      <div className="card">
        <AddCookie onChange={refreshCookies} />
      </div>
      <div className="card">
        <ShowCookies cookieStr={cookieStr} />
      </div>
      <div className="card">
        <ClearCookies onChange={refreshCookies} />
      </div>      
    </>
  )
}

export default App
