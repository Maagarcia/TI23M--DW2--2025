import React from 'react'


const TodoItem = ({ todo ,  removeTodo , completeTodo}) => {
    return (
        <div>
            {todo.map((todo_item) => (
                <li key={todo_item.id}className="Item" >
                    <div className="content" style={{textDecoration: todo_item.isCompleted? "line-through" : '' }}>
                        <p className="text">{todo_item.text}</p>
                        <p className="category">{todo_item.category}</p>
                    </div>
                    <div className="buttons">
                        <button onClick={() => completeTodo(todo_item.id)}>Complete</button>
                        <button onClick={()=> removeTodo(todo_item.id)}>Remove</button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodoItem