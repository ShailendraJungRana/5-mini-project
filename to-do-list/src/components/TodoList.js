import React from 'react'

function TodoList(props) {
  return (
    
      <li className='list_item'>
       {props.item}
        <span className='icons'>
        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
        {/* <i className="fa-solid fa-trash"></i> */}
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        <button className='dlt_btn' onClick={e=>{
            props.deleteItem(props.index)
        }}>Delete</button>
        </span>
        </li>
   
  )
}

export default TodoList
