import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  return (
   
      <nav>
        
        <div>
          <h2 onClick={()=>navigate('/')} className="brand-name">SONIC SOUND</h2>
        </div>
        <div className="links">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/dashboard"
          >
            DASHBOARD
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/reviews"
          >
            REVIEWS
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blogs"
          >
            BLOGS
          </NavLink>
         
        </div>
      </nav>
   
  );
};

export default Navbar;
