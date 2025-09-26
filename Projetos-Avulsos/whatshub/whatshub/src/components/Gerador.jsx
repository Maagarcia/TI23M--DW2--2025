import { useState } from "react";
import styles from "./Gerador.module.css";

export default function Gerador() {

  const [numero,setNumero] = useState('')
  
  const [mensagem, setMensagem] = useState('')

  const [link, setLink] = useState('')

  const especialCaracters = ['(', ')', '-']
  let url = `https://wa.me/55${numero.split('').filter(char => !especialCaracters.includes(char)).join('')}?text=${mensagem}`
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(numero)
    console.log(mensagem)
    setLink(url)
    
  }
    
  const handleCopy = async()=>{
    e.preventDefault();
    navigator.clipboard.writeText(link)
    alert('link copiado')
  }

  const handeChange = (e)=>{
    setNumero(((e.target.value).replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3')))
    // setNumero(e.target.value)
  }


  const handleMensagem = (e) =>{
    setMensagem(e.target.value)
  }

  const redirect =() =>{
    window.open(`${url}`,'_blank')
    e.preventDefault()

  }

  return (
    <>
      <div className={styles.container}>
        <h2>Gerador de Links</h2>

        <form
          action=""
          onSubmit={handleSubmit}
          className={styles.inputs_container}
        > 
          <div className={styles.div_temp}>
            <h5>Numero do Whatsapp</h5>
            <input type="tel" value={numero} onChange={handeChange}/>
          </div>

          <div className={styles.div_temp}>
            <h5>Mensagem (opcional)</h5>
            <textarea name="" id="" value={mensagem} placeholder="Digite uma mensagem" onChange={handleMensagem}></textarea>
          </div>
          <button type="submit"> Gerar Link</button>

        </form>

          <form action="" className={styles.link_container} onSubmit={handleCopy}>
            <div className={styles.buttons_container}>
            <input type="text" name="" id="" value={link} disabled className={styles.geradorParaWhats} />
            <button>o</button>
            </div>
            <button onClick={redirect}>Abrir no Whatsapp</button>
          </form>

      </div>
    </>
  );
}
