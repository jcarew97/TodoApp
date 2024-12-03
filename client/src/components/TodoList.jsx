import Todo from './Todo'

function TodoList({todos, deleteTodo, updateTodo}) {

  return (
    <>
      <ul className='list'>
        {todos.map( t => (
          <Todo todoItem={t} key={t.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        ))}
      </ul>
    </>
  )
}

export default TodoList;