import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Caixa from './components/Caixa'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Caixa/>
      {/* <h1>Hello World</h1> */}


    </>
  )
}

export default App
