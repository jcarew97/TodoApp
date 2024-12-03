import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles/app.scss'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
  
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4() , task } ]);

  }

  const deleteTodo = (task) => {

    setTodos((prevTodos) => {
      let newTodos = prevTodos.filter( (t) => t.id != task.id );

      return newTodos;
    });

  }

  const updateTodo = (id, newTask) => {

    let updatedTodos = todos.map((t) => {
      if(t.id === id ){
        t.task = newTask
      }

      return t
    });

    setTodos([...updatedTodos]);

  }


  return (
    <>
      <div>
				<h1>Todo List</h1>

        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>

        <TodoForm addTodo={addTodo}/>
			</div>
    </>
  )
}

export default App
