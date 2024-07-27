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
    <div>
      <h1>{userInfo?.name}</h1>
      <p>{userInfo?.email}</p>
    </div>
  )
}

export default Profile