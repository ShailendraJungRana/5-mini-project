import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit= e=>{
        e.preventDefault();
        addTodo(value); 


    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" value={value}
    className='todi-input' onChange={(e)=>console.log(e.target.value)} placeholder="Enter your task"/><br/>
    <button type='submit' className='todo-btn'> Add Task </button>
</form>
  )
}

export default TodoForm
