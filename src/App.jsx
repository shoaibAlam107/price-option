

import './App.css'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/chart/LineChart'
// import Daisinav from './components/daisiNav/daisinav'
import NavBar from './components/navBar/NavBar'


function App() {
 

  return (
    <>
     {/* <Daisinav></Daisinav> */}
     <NavBar></NavBar>
      <h1 className='font-bold bg-slate-600 text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
