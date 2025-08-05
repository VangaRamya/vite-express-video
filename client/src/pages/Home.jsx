import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-microgreens.jpg";
import { products } from "../data/products";

const Home = () => {
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

      {/* All Products */}
      <section className="featured-products">
        <h2>Our Microgreens Collection</h2>
        <p className="section-description">
          Premium, locally grown microgreens harvested at peak nutrition.
          Each variety offers unique flavors and incredible health benefits.
        </p>
        
         {/* Products Grid */}
        <div className="products-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.image} alt={product.name} className="product-img" />

              <div className="product-info">
                <div className="product-top">
                  <div className="product-title">
                    <span className="product-icon">{product.icon}</span>
                    <h2>{product.name}</h2>
                  </div>
                  <div className="product-price">
                    <span>{product.price}</span>
                    <small>{product.weight}</small>
                  </div>
                </div>

                <div className="product-tags">
                  {product.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>

                <p className="product-desc">{product.description}</p>

                <div className="product-benefits">
                  <h4>❤️ Health Benefits</h4>
                  <ul>
                    {product.benefits.slice(0, 2).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-footer">
                  <div className="product-rating">{"⭐".repeat(5)} <small>(4.9)</small></div>
                  <Link to={`/products/${product.id}`}>
                    <button className="btn-order">Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
