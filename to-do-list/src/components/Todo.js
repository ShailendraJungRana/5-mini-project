import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Todo = ({task, toggleComplete}) => {
  return (
    <div className='Todo'>
        <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed':"" }`}> {task.task} </p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare}/>
            <FontAwesomeIcon icon={faTrash}/>
      
        </div>
    </div>
  )
}

export default Todo
