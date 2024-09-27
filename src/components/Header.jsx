import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, url } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${url}/users/logout`, {
        withCredentials: true, // this is for cookie
      });
      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>TODO</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <button className="btn" disabled={loading} onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
