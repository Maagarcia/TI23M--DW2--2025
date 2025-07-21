import { useState } from "react"

import TodoItem from "./components/TodoItem"
import TodoInput from "./components/TodoInput"

import "./App.css"
import Filter from "./components/Filter"

function App() {
    const [filter, setFilter] = useState("All")
    const [todo, setTodo] = useState([
        // {
        //   id:1,
        //   text: "criar funcionalidade x no sistema",
        //   category: "Trabalho",
        //   isCompleted: false,
        // },
        // {
        //   id:2,
        //   text: "Ir pra academia",
        //   category: "Pessoal",
        //   isCompleted: false,
        // },
        // {
        //   id:3,
        //   text: "Estudar React",
        //   category: "Estudos",
        //   isCompleted: false,
        // }
    ])


    const addTodo = (text, category) => {

        const newItem = [...todo, {
            id: Math.floor(Math.random() * 1000),
            text,
            category,
            isCompleted: false,
        }]
        setTodo(newItem)
    }

    const removeTodo = (id) => {
        const filteredItem = todo.filter(todo => todo.id !== id);
        setTodo(filteredItem)
    }

    const completeTodo = (id) => {
        const updatedTodos = todo.map((item) =>
            item.id === id
                ? { ...item, isCompleted: !item.isCompleted }
                : item
        );

        setTodo(updatedTodos);
    };


   return (
  <div className="app">
    <div className="todo">

      <ul>
      <TodoInput addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
        {todo
          .filter((todo_item) =>
            filter === "All" ? true : todo_item.category === filter
          )
          .map((todo_item) => (
            <TodoItem
              key={todo_item.id}
              todo={todo_item}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </ul>
    </div>
  </div>
);

}

export default App