import { useState } from "react"

const palavrasArray = ['hello','hi','popsicle']

let palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]



export default function Caixa(){
    const [numerodepalavras, setNumeroDePalavras] = useState(0)

    const [percentagem, setPercentagem] = useState(0)
    
    const [palavra,setPalavra] = useState('')
    
    const [count,setCount] = useState(0)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setPalavra('')
        console.log('log')
    
        
    }
    
    const handleChange = (e)=>{
        setPalavra(e.target.value)
        
        if((e.target.value).length == (palavraDoArray).length){
            if(e.target.value == palavraDoArray){
                setCount(count+1)
                palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]
                setPalavra('')
                console.log('sncsk')
                setNumeroDePalavras(numerodepalavras+1)
                setPercentagem(count/numerodepalavras)
                
            }else{
                palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]
                setNumeroDePalavras(numerodepalavras+1)
                setPalavra('')
                setPercentagem(count/numerodepalavras)
            }
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
        <p>Porcentagem de acerto:{(percentagem * 100).toFixed(1)}%</p>
        <p>Numero de palavras:{numerodepalavras}</p>
        </>
        
    )

}