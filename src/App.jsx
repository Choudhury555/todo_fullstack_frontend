import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import toast, { Toaster } from "react-hot-toast"
import axios from "axios";
import { Context, url } from "./main";
import { useContext, useEffect } from "react";

function App() {

  const {setUserInfo,setIsAuthenticated,setLoading} =  useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/users/me`,{
      withCredentials:true
    }).then(res=>{
      setUserInfo(res.data.user);
      setIsAuthenticated(true);
      setLoading(false);
    }).catch(error=>{
      setUserInfo({});
      setIsAuthenticated(false);
      setLoading(false);
    })
  }, [])//this will be called each time when app reload/load for the first time
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Toaster />{/* this is mandatory to use toaster */}
    </Router>
  )
}

export default App
