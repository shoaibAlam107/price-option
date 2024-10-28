import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisinav from './components/daisiNav/daisinav'
import NavBar from './components/navBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Daisinav></Daisinav> */}
     <NavBar></NavBar>
      <h1 className='font-bold bg-slate-600 text-7xl'>Vite + React</h1>
 
    </>
  )
}

export default App
