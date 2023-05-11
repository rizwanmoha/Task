import React from "react";
import "./Header.css";
import { NavLink, Link } from 'react-router-dom';
const  Header = ()  =>{
  return (
    <>
    <header>
      <div className="header-left">
      <NavLink to="/"  >Panicle Tech</NavLink>
      </div>
      <div className="header-right">
      <NavLink to="/"  >Charts</NavLink>
      <NavLink to="/table"  >Table</NavLink>
      <NavLink to="/forms"  >Forms</NavLink>
      </div>
    </header>
    </>
  );
};

export default Header;
