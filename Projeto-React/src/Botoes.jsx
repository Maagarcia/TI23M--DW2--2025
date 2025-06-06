import './css/Botoes.css'

function Botoes({onIncrement, onDecrement}){
    return(
        <>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>

        </>
    )

}

export default Botoes;

