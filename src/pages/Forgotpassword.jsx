import axios from 'axios';
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { url } from '../main';
import toast from 'react-hot-toast';


const Forgotpassword = () => {
    const [email,setEmail] = useState("");
    const [newpassword,setNewpassword] = useState("");
    const [confirmnewpassword,setConfirmnewpassword] = useState("");
    
    const submitForgotHandler = async(e) =>{
        e.preventDefault();
        try {
            const {data} = await axios.post(`${url}/users/forgotpassword`,{
                email,newpassword,confirmnewpassword
            },{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })

            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


  return (
    <div className='login'>
    <section>
      <form onSubmit={submitForgotHandler}>
        <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='New Password' required value={newpassword}  onChange={(e)=>setNewpassword(e.target.value)}/>
        <input type="password" placeholder='Confirm New Password' required value={confirmnewpassword} onChange={(e)=>setConfirmnewpassword(e.target.value)}/>
        <button type='submit'>Reset Password</button>
        <h4>Or</h4>
        <Link to="/login">Login</Link>
      </form>
    </section>
  </div>
  )
}

export default Forgotpassword
