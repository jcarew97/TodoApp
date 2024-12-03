import { useState } from 'react'

function TodoForm({addTodo}) {
  const [todoTitle, setTodoTitle] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoTitle);
    setTodoTitle('');
  }

  return (
    <>
      <form className="todoForm" onSubmit={handleSubmit}>
        <label htmlFor="task" />
        <input type="text" id="task" name="task" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}/>
        <button>Add Todo</button>
      </form>
    </>
  )
}

export default TodoForm;