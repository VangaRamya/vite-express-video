// src/pages/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

// ✅ NO import of SCSS here!

const Products = () => {

  return (
    <div className="products-page">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <h1>Our Microgreens Collection</h1>
          <p>
            Premium, locally grown microgreens harvested at peak nutrition.
            Each variety offers unique flavors and incredible health benefits.
          </p>
        </div>

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
                    {product.benefits.map((b, i) => (
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

        {/* Call to Action */}
        <div className="products-cta">
          <h2>Ready to Order?</h2>
          <p>Get in touch to place your order or learn more about our growing process.</p>
          <Link to="/contact">
            <button className="btn-contact">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
