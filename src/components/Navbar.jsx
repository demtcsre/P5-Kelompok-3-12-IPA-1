import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
      <h1><li><Link to="/">QUITNIC</Link></li></h1>
      <h2>|</h2>
      <ul>
        <li><Link to="/about">Tentang</Link></li>
        <li><Link to="/alternative-products">Produk Alternatif</Link></li>
        <li><Link to="/educational-content">Konten Edukasi</Link></li>
        <li><Link to="/local-support">Dukungan Lokal</Link></li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;