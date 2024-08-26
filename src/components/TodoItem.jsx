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
    <div className='todo'  style={{backgroundColor: isCompleted && "lightgreen"}}>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div>
            <input type="checkbox" checked={isCompleted} onChange={()=>updateTaskHandler(id)}/>
            <i className="fa-solid fa-trash-can icon" style={{color:"red"}} onClick={()=>deleteTaskHandler(id)}></i>
            <i className="fa-solid fa-pen-to-square icon" style={{color:"green"}} onClick={()=>editClick(id,title,description)}></i>
            {editFlag==true && <Edit/>}
        </div>
    </div>
  )
}

export default TodoItem