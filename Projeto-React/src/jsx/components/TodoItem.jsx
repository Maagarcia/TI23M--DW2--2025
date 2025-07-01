import React from 'react'

const TodoItem = ({ todo, removeTodo, completeTodo }) => {
  return (
    <li className="Item">
      <div className="content">
        <p className="text" style={{ textDecoration: todo.isCompleted ? "line-through" : '' }}>
          {todo.text}
        </p>
        <p className="category">{todo.category}</p>
      </div>
      <div className="buttons">
        <button onClick={() => completeTodo(todo.id)}>Complete</button>
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      </div>
    </li>
  )
}

export default TodoItem
