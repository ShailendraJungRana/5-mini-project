import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit= (e)=>{ 
      //prevent default action
        e.preventDefault();
        if(value){
          //add todo 
        addTodo(value); 
        //clear form after the submission
        setValue("")
      }

    };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
     <input type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
         className="todo-input" placeholder='What up today?' /> <br/>
    <button type='submit' className='todo-btn'> Add Task </button>
</form>
  )
}

export default TodoForm
