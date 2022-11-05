import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="Navbar">
      <span className="nav-logo">A&K</span>
      <h1>Art&Kultur</h1>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about-us">AboutUs</NavLink>
        <NavLink to="/contact-us">ContactUs</NavLink>
        <NavLink to="/Sign-in">SignIn</NavLink>
        <NavLink to="/Sign-up">SignUp</NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;