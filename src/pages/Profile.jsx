import React, { useContext, useEffect } from 'react'
import { Context, url } from '../main';
import Loader from '../components/Loader';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  
  const {userInfo,setUserInfo,setIsAuthenticated,loading,isAuthenticated} =  useContext(Context);

  // console.log(userInfo);
  useEffect(() => {
    axios.get(`${url}/users/me`,{
      withCredentials:true
    }).then(res=>{
      setUserInfo(res.data.user);
      setIsAuthenticated(true);
    }).catch(error=>{
      setUserInfo({});
      setIsAuthenticated(false);
    })
  }, [isAuthenticated])

  if(!isAuthenticated){
    return <Navigate to={"/login"}></Navigate>
  }
  
  return (
    loading ? <Loader /> :
    <div style={{height:"94vh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"lightblue"}}>
      <div>
        <h1>USER NAME : = {userInfo?.name}</h1>
        <p>USER EMAIL : = {userInfo?.email}</p>
      </div>
    </div>
  )
}

export default Profile