import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="navbar">
      <h1><span> Meal</span>DB</h1>

      <div className="links">
        <a href="#">Order</a>
        <a href="#">Inventory</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Header;
