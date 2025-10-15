import { useNavigate } from 'react-router-dom'
import styles from './TelaLogin.module.css'
import { useState } from 'react';
const TelaLogin = () => {
    const [login, setLogin] = useState()
    
    const navigate = useNavigate()

    return (
    <>
    <div className={styles.tela}>
    <div className={styles.container}>
        <input className={styles.inputs} type="text" placeholder='email'/>
        <input className={styles.inputs} type="text" placeholder='senha'/>
        <button className={styles.button} onClick={()=> navigate('/home')}>login</button>   
        <p>{login}</p>
    </div>
    </div>
         </>
  )
}

export default TelaLogin