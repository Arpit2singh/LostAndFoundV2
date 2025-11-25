import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frontui from './components/Frontui'
import AddPro from './components/AddPro'
import ProLib from './components/ProLib'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='h-screen w-screen bg-transparent text-white'>
    {/* <Frontui/> */}
    {/* <AddPro/> */}
    <ProLib/>
  </div>
  )
}

export default App
