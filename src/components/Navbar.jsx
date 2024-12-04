import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
      <h1><li><Link to="/">QUITNIC</Link></li></h1>
      <h2>|</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/alternative-products">Alternative Products</Link></li>
        <li><Link to="/educational-content">Educational Content</Link></li>
        <li><Link to="/local-support">Connect to Local Support</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;