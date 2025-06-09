import { use, useState } from 'react'
import './css/Tabela.css'

export default function Tabela() {
    let [imc, setIMC] = useState(0)
    let [peso,setPeso] = useState(0)
    let [altura, setAltura] = useState(0)
    let condicao = ''
    if (imc.toFixed(1) <= 18.5){
        condicao = 'baixo'
    }
    if (imc.toFixed(1) > 18.5 && imc.toFixed(1) <=24.9){
        condicao = 'Normal'
    }
    if (imc.toFixed(1) > 24.9 && imc.toFixed(1) <=29.9){
        condicao = 'Sobrepeso'
    }
    if (imc.toFixed(1) >30 && imc.toFixed(1) <=34.9){
        condicao = 'Obesidade tipo 1'
    }
    if (imc.toFixed(1) >35 && imc.toFixed(1) <=39.9){
        condicao = 'Obesidade tipo 2'
    }
    if (imc.toFixed(1) > 40){
        condicao = 'Obesidade tipo 3'
    }
    return (
        <div className="tabela-container">
            <div className="tabela">
                <h1>
                    Calculadora de IMC
                </h1>
                <div className="input-container">
                    <input type='number' value={peso} placeholder='peso em kg' onChange={(e) => setPeso(e.target.value)} />
                    <input type='number' value={altura} placeholder='altura em cm' onChange={(o) => setAltura(o.target.value)} />
                    <button onClick={() => setIMC(peso/((altura/100)*(altura/100)))}>calcular</button>
                </div>
                <div id="resultados">
                    <p>Seu IMC: {imc.toFixed(1)}</p>
                    <p>Condição: {condicao}</p>
                </div>
            </div>

        </div>
    )
}