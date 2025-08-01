import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-microgreens.jpg";
import sunflowerImage from "../assets/sunflower-microgreens.jpg";
import radishImage from "../assets/radish-microgreens.jpg"; 
import peasImage from "../assets/pea-microgreens.jpg";

const Home = () => {
  const featuredProducts = [
    {
      name: "Sunflower Microgreens",
      image: sunflowerImage,
      price: "$8",
      description: "Nutty flavor, rich in vitamin E",
      badge: "Popular",
    },
    {
      name: "Radish Microgreens",
      image: radishImage,
      price: "$6",
      description: "Spicy kick, loaded with antioxidants",
      badge: "Spicy",
    },
    {
      name: "Pea Shoot Microgreens",
      image: peasImage,
      price: "$7",
      description: "Sweet taste, high in protein",
      badge: "Sweet",
    },
  ];

  const benefits = [
    {
      icon: "❤️",
      title: "Nutritionally Dense",
      description: "Up to 40x more nutrients than mature vegetables",
    },
    {
      icon: "🌿",
      title: "Freshly Harvested",
      description: "Cut to order within hours of harvest",
    },
    {
      icon: "♻️",
      title: "Sustainably Grown",
      description: "Eco-friendly practices in our urban farm",
    },
    {
      icon: "📍",
      title: "Locally Sourced",
      description: "Grown right here in our city apartment",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)"
        }}></div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Fresh, Organic <br />
            <span style={{ color: "#56b870" }}>Microgreens</span>
          </h1>
          <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
            Nutrient-dense microgreens grown sustainably in our urban farm
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link to="/products">
              <button style={{ padding: "10px 20px", marginRight: "1rem", backgroundColor: "#56b870", color: "#fff", border: "none" }}>Shop Microgreens</button>
            </Link>
            <Link to="/about">
              <button style={{ padding: "10px 20px", border: "1px solid #fff", color: "#fff", background: "transparent" }}>Our Story</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: "60px 20px", background: "#f4f4f4" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#ffffff", fontWeight: "bold" }}>Why Choose TrueLeaf?</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Experience the difference of truly fresh, locally grown microgreens
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "20px"
        }}>
          {benefits.map((benefit, i) => (
            <div key={i} style={{ flex: "1 1 200px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px", color: "##ff0000" }}>{benefit.icon}</div>
              <h3 style={{ color: "#ff0000" }}>{benefit.title}</h3>
              <p style={{ color: "#ff0000" }}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Featured Microgreens</h2>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Our most popular varieties, fresh from the growing trays
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}>
          {featuredProducts.map((product, i) => (
            <div key={i} style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
              width: "300px"
            }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h3>{product.name}</h3>
                  <span style={{ backgroundColor: "#e0ffe0", padding: "4px 8px", borderRadius: "4px" }}>{product.badge}</span>
                </div>
                <p>{product.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                  <strong>{product.price}</strong>
                  <div>{"⭐".repeat(5)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link to="/products">
            <button style={{ padding: "10px 20px", backgroundColor: "#56b870", color: "#fff", border: "none" }}>View All Products</button>
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: "#e8f5e9", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Our Urban Farming Journey</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto 30px" }}>
          What started as a small experiment in our apartment has grown into a passion for 
          providing fresh, nutrient-dense microgreens to our community. We believe in 
          sustainable practices, local food systems, and the incredible power of these tiny greens.
        </p>
        <Link to="/about">
          <button style={{ padding: "10px 20px", border: "1px solid #56b870", backgroundColor: "#fff", color: "#56b870" }}>
            Read Our Full Story
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
