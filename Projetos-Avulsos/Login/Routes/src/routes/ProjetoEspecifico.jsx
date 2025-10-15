import React from 'react'
import { useParams } from 'react-router-dom'


export const ProjetoEspecifico = () => {
    const nomes = ['ncds','Mateus','Geovano', 'Claudio']
  const {id} = useParams()
  console.log(id)
    return (
    <div>
        <h1>Informação {id}</h1>
        <p>Nome {nomes[id]}</p>
    </div>
  )
}
