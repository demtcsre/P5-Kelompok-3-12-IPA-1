import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Innovate</h1>
      <nav>
        <a href="#features" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>
          Features
        </a>
        <a href="#about" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>
          About
        </a>
        <a href="#contact" style={{ margin: "0 15px", textDecoration: "none", color: "#333" }}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;