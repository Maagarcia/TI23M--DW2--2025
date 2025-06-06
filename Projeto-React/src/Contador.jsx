import '../src/css/Contador.css'
import { useState } from "react";
import Botoes from "./Botoes";

export default function Contador(){
    const [contador, setContador]  = useState(0);
     const incrementar = () => setContador(contador + 1);
     const decrementar = () => setContador(contador - 1);

     return (
        <div >
            <h2>contador</h2>
            <div className="Contadores">
                <p>seu contador esta em {contador}</p>
                <div>

                <Botoes onDecrement={decrementar} onIncrement={incrementar}/>
                </div>

            </div>
        </div>
     )
}