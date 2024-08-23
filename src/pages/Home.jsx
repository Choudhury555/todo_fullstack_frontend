import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {Context, url} from "../main"
import toast from 'react-hot-toast';
import TodoItem from '../components/TodoItem';
import { Navigate } from 'react-router-dom';

const Home = () => {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [taskLoading,setTaskLoading] = useState(false);//this loading is for disabling button/throttling purpose
  const [taskArray,setTaskArray] = useState([]);

  const {isAuthenticated,refresh,setRefresh} = useContext(Context);


  const updateTaskHandler = async (id) =>{
    // console.log(id);
    try {
      const {data} = await axios.put(`${url}/tasks/${id}`,{},{
        withCredentials:true
      })
      toast.success(data.message);
      setRefresh(prev=>!prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }

  }
  const deleteTaskHandler = async (id) =>{
    // console.log(id);
    try {
      const {data} = await axios.delete(`${url}/tasks/${id}`,{
        withCredentials:true
      })
      toast.success(data.message);
      setRefresh(prev=>!prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }



  const submitHandler = async (e) => {
    e.preventDefault();
    setTaskLoading(true);
    try {
      const {data} = await axios.post(`${url}/tasks/newtask`,{
        title,description
      },{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        }
      });

      setTitle("");
      setDescription("");
      toast.success(data.message);
      setTaskLoading(false);
      setRefresh(prev=>!prev);
    } catch (error) {
      toast.error(error.response.data.message);
      setTaskLoading(false);
    }
  }

  useEffect(() => {
    axios.get(`${url}/tasks/getmytask`,{
      withCredentials:true
    }).then(res=>{
      // console.log(res.data.alltask);
      setTaskArray(res.data.alltask)
    }).catch(error=>{
      toast.error(error.response.data.message);
    })
  }, [refresh])
  

  if(!isAuthenticated){
    return <Navigate to={"/login"}></Navigate>
  }

  const eachTaskArray = taskArray.map((ele)=>(
    <TodoItem key={ele._id} id={ele._id} title={ele.title} description={ele.description} isCompleted={ele.isCompleted} updateTaskHandler={updateTaskHandler} deleteTaskHandler={deleteTaskHandler}/>
  ))

  return (
    <div className="container">
        <div className='login'>
          <section>
            <form onSubmit={submitHandler}>
              <input type="text" placeholder='Title' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
              <input type="text" placeholder='Description' required value={description} onChange={(e)=>setDescription(e.target.value)}/>
              <button disabled={taskLoading} type='submit'>Add Task</button>
            </form>
          </section>
        </div>
      <section className="todosContainer">
        {eachTaskArray}
      </section>
    </div>
  )
}

export default Home