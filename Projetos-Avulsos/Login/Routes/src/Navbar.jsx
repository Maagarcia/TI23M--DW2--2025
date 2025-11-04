import React, { use } from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
export const Navbar = () => {

  const[tamanho, setTamanho] = useState(null)
  
  const openSide = () => {
    
  }


  return (
    <>
    <header className={styles.cabecalho}>
    <Link to='/home' className={styles.hyperlinks}>Home</Link>
    <Link to='aboutme' className={styles.hyperlinks}>Quem sou eu?</Link>
    <Link to='projects' className={styles.hyperlinks}>Projetos</Link>
    <Link to='estagio' className={styles.hyperlinks}>Estágio</Link>
    <Link to= 'ela' className={styles.hyperlinks}>Por quem você segue</Link>
    <button className={styles.bar} onClick={openSide}>dc</button>
    </header>
    <Outlet/>
      
    
    </>
  )
}
