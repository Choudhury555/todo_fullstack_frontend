import React from 'react'

const TodoItem = ({id,title,description,isCompleted,updateTaskHandler,deleteTaskHandler}) => {
  return (
    <div className='todo'>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div>
            <input type="checkbox" checked={isCompleted} onChange={()=>updateTaskHandler(id)}/>
            <button className='btn' onClick={()=>deleteTaskHandler(id)}>DELETE</button>
        </div>
    </div>
  )
}

export default TodoItem