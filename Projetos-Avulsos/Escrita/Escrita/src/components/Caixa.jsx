import { useState } from "react"

export default function Caixa(){
    const [palavra,setPalavra] = useState('')

    const [count,setCount] = useState(0)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setPalavra('')
        console.log('log')
    }

    const handleChange = (e)=>{
        setPalavra(e.target.value)

        if(palavra == 'labubu'){
            setCount(count+1)
            console.log('sncsk')
        }
    }
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite Sua Palavra" value={palavra} onChange={handleChange} />
            <button type="submit"></button>


        </form>
        <p>{count}</p>
        </>
        
    )

}