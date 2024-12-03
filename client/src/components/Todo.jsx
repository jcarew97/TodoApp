import { useState } from 'react'

function Todo({todoItem, deleteTodo, updateTodo}) {

  const [isEditing, setIsEditing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [newTask, setNewTask] = useState(todoItem.task);

  const handleDelete = (e) => {
    e.preventDefault();

    deleteTodo(todoItem);
  }

  const handleUpdate = (e) => {
    e.preventDefault();

    updateTodo(todoItem.id, newTask);
    setIsEditing(false);
  }



  return (
    <>
      {isEditing ? 
        <form className='list_form' onSubmit={handleUpdate}>
          <label htmlFor="task" />
          <input type="text" id="task" name="task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button>Update</button>
        </form>
      :
        <li className={`list_item ${isComplete ? `done` : ``}`}>
          <div className='list_itemTask'>
            <div className="checkbox" onClick={() => setIsComplete(prev => {return !prev})}>
              <span>X</span>
            </div>
            <span className="task">{todoItem.task}</span>
          </div>
          <div className='list_itemBtns'>
            <span onClick={() => setIsEditing(true)}>Edit</span>
            <span onClick={handleDelete}>Delete</span>
          </div>
        </li>
      }

    </>
  )

}

export default Todo;