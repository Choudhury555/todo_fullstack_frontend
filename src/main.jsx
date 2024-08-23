import React,{createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/Edit.css'
import './styles/app.scss'

export const url = "https://todo-fullstack-tim8.onrender.com/api/v1";

export const Context = createContext();

const AppContextWapper = ()=>{
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [loading,setLoading] = useState(false);//this loading is for disabling button/throttling purpose
  const [userInfo,setUserInfo] = useState({});
  const [refresh,setRefresh] = useState(false);
  const [editFlag,setEditFlag] = useState(false);
  const [currTitle, setCurrTitle] = useState("");
  const [currDescription, setCurrDescription] = useState("");
  const [currId, setCurrId] = useState("");

  return (
    <Context.Provider value={{isAuthenticated,setIsAuthenticated,loading,setLoading,userInfo,setUserInfo,refresh,setRefresh,editFlag,setEditFlag,currTitle,currDescription,currId,setCurrDescription,setCurrId,setCurrTitle}}>
      <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextWapper />
  </React.StrictMode>,
)
