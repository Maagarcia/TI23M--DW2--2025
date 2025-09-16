import { useState } from "react"

import { useEffect } from "react"

const palavrasArray = ['hello','hi','popsicle']

let palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]





export default function Caixa(){
    const [numerodepalavras, setNumeroDePalavras] = useState(0)
    
    const [percentagem, setPercentagem] = useState(0)
    
    const [palavra,setPalavra] = useState('')
    
    const [count,setCount] = useState(0)

    useEffect(() => {
        setPercentagem(count / numerodepalavras)
    }, [count, numerodepalavras])
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setPalavra('')
        console.log('log')
    
        
    }
    
    const handleChange = (e)=>{
        // console.log(palavra)
        setPalavra(e.target.value)
        if((e.target.value).length == (palavraDoArray).length){
            if(e.target.value == palavraDoArray){
                // palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]
                // setPalavra('')
                console.log(percentagem,'isso é a percentagem de acerto')
                console.log(count,'isso é quanto eu acertei')
                console.log(numerodepalavras,'isso é o numero de poalavras')
                setNumeroDePalavras((num)=>num+1)
                setCount((num)=>num+1)

                
                
            }else{
                setNumeroDePalavras((num)=>num+1)
            }
            palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]
            setPalavra('')
        }
    }
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite Sua Palavra" value={palavra} onChange={handleChange} />
            <button type="submit"></button>


        </form>
        <p>{count}</p>
        <p>{palavraDoArray}</p>
        <p>Porcentagem de acerto:{numerodepalavras==0 && count==0 ? `0`: Math.floor((percentagem * 100).toFixed(1))}%</p>
        <p>Numero de palavras:{numerodepalavras}</p>
        <h1>{palavra}</h1>
        </>
        
    )

}