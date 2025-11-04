import React from 'react'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <>
    <div className={styles.container}>
    <h1 >Quem sou eu?</h1>
    <div className={styles.colunas}>
    <section>
    <ul>
      

      <li>
        Dev Iniciante FullStack, conhecimentos sobre javascript, HTML, CSS, python, git e github.
      </li>
      <li>
        Aprendo rápido, perfil curioso e proativo
      </li>
      <li>
        Estagiario da Cybertech Soluções em TI
      </li>
      <li>
        Apaixonado por tecnologia e inovação
      </li>
      
    </ul>
    </section>
    <div className={styles.foto}></div>
    </div>
    </div>
    </>
  )
}
