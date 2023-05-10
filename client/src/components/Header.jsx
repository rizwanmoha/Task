import React from "react";
import "./Header.css";

const  Header = ()  =>{
  return (
    <>
    <header>
      <div className="header-left">
        <h1>Panicle Tech</h1>
      </div>
      <div className="header-right">
        <h2>Charts</h2>
        <h2>Tables</h2>
        <h2>Forms</h2>
      </div>
    </header>
    </>
  );
};

export default Header;
