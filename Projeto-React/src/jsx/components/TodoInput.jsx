import React, { useState } from 'react'


import '../TodoInput.css'

const TodoInput = ({addTodo}) => {
    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title,category)

        if(!title || !category){return}
        addTodo(title,category)
        setTitle("")
        setCategory("")
    }

  return (
    <div>
        <h2>Criar Tarefas</h2>
            <form onSubmit={handleSubmit}>
        <div className="all" >

        <div className="forms" >


            <input type="text" value={title} placeholder='Digite o titulo' onChange={(e) =>setTitle(e.target.value)}/>
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">selecione uma categoria</option>
                <option value="Fix">Fixo</option>
                <option value="Variable">Variado</option>
            </select>
        </div>
        <button className='adition'>+</button>
        </div>
            </form>

    </div>
  )
}

export default TodoInput