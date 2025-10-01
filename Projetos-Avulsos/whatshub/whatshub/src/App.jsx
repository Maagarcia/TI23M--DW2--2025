import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gerador from './components/Gerador'
import Agenda from './components/Agenda'

function App() {

  return (
    <div className='container'>
    <Gerador/>
    <Agenda/>
    </div>
  )
}

export default App
