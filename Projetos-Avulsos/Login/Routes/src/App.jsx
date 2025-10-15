import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Outlet/>
      <p>Navbar</p>
    </>
  )
}

export default App
