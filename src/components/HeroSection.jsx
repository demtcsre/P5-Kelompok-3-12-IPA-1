import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f7f8fa",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "20px" }}>
        Innovation and Solutions for Social and Environmental Issues
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555", marginBottom: "40px" }}>
        Empowering change through creativity and sustainable technology to tackle the most pressing challenges of our time.
      </p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          fontWeight: "600",
          color: "#fff",
          backgroundColor: "#333",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Learn More
      </button>
    </section>
  );
};

export default HeroSection;