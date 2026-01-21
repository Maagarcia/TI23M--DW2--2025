import React, { use } from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
export const Navbar = () => {

  const[tamanho, setTamanho] = useState(true)
  
  const openSide = () => {
    setTamanho(!tamanho) 
  }


  return (
    <>
    <header className={styles.cabecalho}>
    {/* <Link to='/home' className={styles.hyperlinks}>Home</Link>
    <Link to='aboutme' className={styles.hyperlinks}>Quem sou eu?</Link>
    <Link to='projects' className={styles.hyperlinks}>Projetos</Link>
    <Link to='estagio' className={styles.hyperlinks}>Estágio</Link>
    <Link to= 'ela' className={styles.hyperlinks}>Por quem você segue</Link> */}

    { tamanho ? (
      <>
      <Link to='/home' className={styles.hyperlinks}>Home</Link>
    <Link to='aboutme' className={styles.hyperlinks}>Quem sou eu?</Link>
    <Link to='projects' className={styles.hyperlinks}>Projetos</Link>
    <Link to='estagio' className={styles.hyperlinks}>Estágio</Link>
    <Link to= 'ela' className={styles.hyperlinks}>Por quem você segue</Link>
    <Link to='Bartolomeu' className={styles.hyperlinks}>RPG</Link>
      </>)


    : ( <>
        <div className={ { tamanho } ? styles.sideopen : styles.sideclosed } >
          <li><Link to='/home' className={styles.hyperlinks}>Home</Link></li>
          <li><Link to='aboutme' className={styles.hyperlinks}>Quem sou eu?</Link></li>
          <li><Link to='projects' className={styles.hyperlinks}>Projetos</Link></li>
          <li><Link to='estagio' className={styles.hyperlinks}>Estágio</Link></li>
          <li><Link to= 'ela' className={styles.hyperlinks}>Por quem você segue</Link></li>


        </div>
    
    </>)}
    <button className={styles.bar} onClick={openSide}>dc</button>

    </header>
    <Outlet/>
      
    
    </>
  )
}
