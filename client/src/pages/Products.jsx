// src/pages/Products.jsx
import React from "react";
import { Link } from "react-router-dom";

import sunflowerImage from "../assets/sunflower-microgreens.jpg";
import radishImage from "../assets/radish-microgreens.jpg";
import wheatgrassImage from "../assets/wheatgrass-microgreens.jpg";
import peasImage from "../assets/pea-microgreens.jpg";
import mustardImage from "../assets/mustard-microgreens.jpg";

// ✅ NO import of SCSS here!

const Products = () => {
  const products = [
    {
      name: "Sunflower Microgreens",
      image: sunflowerImage,
      price: "$8",
      weight: "100g",
      description: "Nutty, crunchy microgreens with a mild sunflower seed flavor",
      benefits: [
        "Rich in vitamin E and healthy fats",
        "High in protein and fiber",
        "Contains folate and magnesium",
        "Supports heart and brain health",
      ],
      tags: ["Popular", "Nutty"],
      icon: "🌿",
    },
    {
      name: "Radish Microgreens",
      image: radishImage,
      price: "$6",
      weight: "100g",
      description: "Spicy, peppery microgreens that add a kick to any dish",
      benefits: [
        "Loaded with antioxidants",
        "Natural detoxification support",
        "Rich in vitamins A, B, C, E, and K",
        "Anti-inflammatory properties",
      ],
      tags: ["Spicy", "Detox"],
      icon: "⚡",
    },
    {
      name: "Wheatgrass Microgreens",
      image: wheatgrassImage,
      price: "$10",
      weight: "100g",
      description: "Nutrient-dense superfood with a mild, grassy flavor",
      benefits: [
        "Excellent source of chlorophyll",
        "High in vitamins A, C, and E",
        "Rich in iron and amino acids",
        "Boosts energy and immunity",
      ],
      tags: ["Superfood", "Energy"],
      icon: "🛡️",
    },
    {
      name: "Pea Shoot Microgreens",
      image: peasImage,
      price: "$7",
      weight: "100g",
      description: "Sweet, tender microgreens with a fresh pea flavor",
      benefits: [
        "High in protein and fiber",
        "Rich in vitamins A and C",
        "Contains folate and beta-carotene",
        "Supports eye and skin health",
      ],
      tags: ["Sweet", "Protein"],
      icon: "❤️",
    },
    {
      name: "Mustard Microgreens",
      image: mustardImage,
      price: "$6",
      weight: "100g",
      description: "Bold, peppery microgreens with a slight mustard bite",
      benefits: [
        "High in vitamins K, C, and E",
        "Rich in antioxidants",
        "Contains glucosinolates",
        "Supports immune system",
      ],
      tags: ["Bold", "Immune"],
      icon: "🔥",
    },
  ];

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
                  <Link to="/contact">
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
