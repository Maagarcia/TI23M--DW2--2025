import { useState } from 'react'

const AddGasto = ({adicionarGasto}) => {
  const [nome,setNome] = useState("")
  const [valor,setValor] = useState("")
  const [tipo,setTipo] = useState("")
  
  const hoverAdd = ()=>{
    console.log('teste')
    if(!nome){
      alert("o campo Nome é obrigatório")
      return
    }
    if(!valor){
      alert("o campo Valor é obrigatório")
      return
    }
    if(tipo == ""){
      alert("selecione o tipo")
      return
    }
    adicionarGasto(nome,valor,tipo)
    
    setNome("")
    setValor("")
    setTipo("")
  }

  return (
    <div className='addGasto'>
      <input type="text" value={nome} placeholder='Nome (obrigatório)' onChange={(e)=>(setNome(e.target.value))}/>
      <input type="number" value={valor} placeholder='Valor (obrigatório)'onChange={(e)=>(setValor(e.target.value))}/>
      <select value={tipo} onChange={(e)=>(setTipo(e.target.value))} >
          <option value="">Tipo</option>
          <option value="fixo">Fixo</option>
          <option value="variavel">Variavel</option>
      </select>
      <button onClick={hoverAdd}>Adicionar</button>
    </div>
  )
}

export default AddGasto