import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#333",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <p>&copy; 2024 Innovate. All rights reserved.</p>
      <p>
        <a href="mailto:contact@innovate.com" style={{ color: "#fff", textDecoration: "underline" }}>
          contact@innovate.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
