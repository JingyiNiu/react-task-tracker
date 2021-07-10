import React from "react";
import { Link } from "react-router-dom";

import "./Header.styles.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <Link to='/' className="nav-link">React Demo</Link>
        <Link to='/about' className="nav-link">About</Link>
      </div>
    </nav>
  );
};

export default Header;
