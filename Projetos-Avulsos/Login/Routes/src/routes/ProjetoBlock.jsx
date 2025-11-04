import React from 'react'
import styles from './ProjetoEspecifico.module.css'

export const ProjetoBlock = (props) => {
  return (
    <div className={styles.container}>
        <h1>Projeto</h1>
        <p>{props.children}</p>

    </div>
  )
}
