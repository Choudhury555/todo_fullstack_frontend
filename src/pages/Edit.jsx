import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context ,url} from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Edit = () => {
  
  const {setEditFlag,currId,currTitle,currDescription,setCurrTitle,setCurrDescription,setRefresh} = useContext(Context);
  // console.log(`${url}/tasks/edit/${currId}`);

  const EditSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post(`${url}/tasks/edit/${currId}`,{
        title:currTitle,description:currDescription
      },{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json",
        }
      });

      toast.success(data.message);
      setRefresh(prev=>!prev);
      setEditFlag(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }


  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          {/* <Link to={"/login"}> */}
          <span className="close" onClick={() => setEditFlag(false)}>
            &times;
          </span>
          {/* </Link> */}
          <div className="container">
            <div className="login">
              <section>
                <form onSubmit={EditSubmitHandler}>
                  <input
                    type="text"
                    placeholder="Title"
                    required
                    value={currTitle}
                    onChange={(e)=>setCurrTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    required
                    value={currDescription}
                    onChange={(e)=>setCurrDescription(e.target.value)}
                  />
                  <button type="submit">Edit Task</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
