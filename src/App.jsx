import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar'
import Middle from './assets/Middle'
import Bottom from './assets/Bottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Middle></Middle>
      <Bottom></Bottom>
    </>
  )
}

export default App
