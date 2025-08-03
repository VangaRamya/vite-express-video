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
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Fresh, Organic <br />
            <span className="highlight">Microgreens</span>
          </h1>
          <p>
            Nutrient-dense microgreens grown sustainably in our urban farm
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">
              Shop Microgreens
            </Link>
            <Link to="/about" className="btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Why Choose TrueLeaf?</h2>
        <p className="section-description">
          Experience the difference of truly fresh, locally grown microgreens
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="benefit-item">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 >{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Microgreens</h2>
        <p className="section-description">
          Our most popular varieties, fresh from the growing trays
        </p>
        <div className="products-grid">
          {featuredProducts.map((product, i) => (
            <div key={i} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-content">
                <div className="product-header">
                  <h3>{product.name}</h3>
                  <span className="badge">{product.badge}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <strong className="price">{product.price}</strong>
                  <div className="rating">{"⭐".repeat(5)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-button">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <h2>Our Urban Farming Journey</h2>
        <p className="story-content">
          What started as a small experiment in our apartment has grown into a passion for
          providing fresh, nutrient-dense microgreens to our community. We believe in
          sustainable practices, local food systems, and the incredible power of these tiny greens.
        </p>
        <Link to="/about" className="btn-outline">
          Read Our Full Story
        </Link>
      </section>
    </div>
  );
};

export default Home;
