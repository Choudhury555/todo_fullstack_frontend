import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import { Context } from '../main';

const TodoItem = ({id,title,description,isCompleted,updateTaskHandler,deleteTaskHandler}) => {



  const {editFlag,setEditFlag,currId,currTitle,currDescription,setCurrId,setCurrTitle,setCurrDescription} = useContext(Context);
  // console.log(id);


const editClick= (id,title,description)=>{
  // console.log("wow",id,title,description);
  setCurrId(id);
  setCurrTitle(title);
  setCurrDescription(description);
  setEditFlag(true);
}

  return (
    <div className='todo'>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div>
            <input type="checkbox" checked={isCompleted} onChange={()=>updateTaskHandler(id)}/>
            <button className='btn' onClick={()=>deleteTaskHandler(id)}>DELETE</button>
            <button className='btn' onClick={()=>editClick(id,title,description)}>EDIT</button>
            {editFlag==true && <Edit/>}
        </div>
    </div>
  )
}

export default TodoItem