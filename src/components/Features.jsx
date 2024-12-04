import React from "react";

const Features = () => {
  const features = [
    {
      title: "Sustainability",
      description: "Developing eco-friendly solutions for a greener planet.",
    },
    {
      title: "Innovation",
      description: "Bridging gaps with cutting-edge technologies.",
    },
    {
      title: "Social Impact",
      description: "Empowering communities through education and opportunity.",
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Our Key Focus Areas
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              backgroundColor: "#f7f8fa",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{feature.title}</h3>
            <p style={{ fontSize: "1rem", color: "#555" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;