import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frontui from './components/Frontui'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='h-full w-screen text-white'>
    <Frontui/>
  </div>
  )
}

export default App
