import React from "react";
import { Link } from "react-router-dom";

// Import images
import sunflowerImage from "../assets/sunflower-microgreens.jpg";
import radishImage from "../assets/radish-microgreens.jpg";
import wheatgrassImage from "../assets/wheatgrass-microgreens.jpg";
import peasImage from "../assets/pea-microgreens.jpg";
import mustardImage from "../assets/mustard-microgreens.jpg";

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
      icon: "⚡",
    },
  ];

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Our Microgreens Collection</h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", color: "#555" }}>
            Premium, locally grown microgreens harvested at peak nutrition. Each variety offers unique
            flavors and incredible health benefits.
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px"
        }}>
          {products.map((product, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fff",
              overflow: "hidden",
              transition: "0.3s",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "16px" }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>{product.icon}</span>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{product.name}</h2>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "green" }}>{product.price}</div>
                    <div style={{ fontSize: "0.85rem", color: "#888" }}>{product.weight}</div>
                  </div>
                </div>

                <div style={{ marginBottom: "8px" }}>
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        fontSize: "0.75rem",
                        padding: "4px 8px",
                        marginRight: "5px",
                        backgroundColor: "#eee",
                        borderRadius: "4px"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p style={{ color: "#666", marginBottom: "12px" }}>{product.description}</p>

                <div>
                  <h4 style={{ marginBottom: "8px", fontWeight: "bold", color: "#222" }}>❤️ Health Benefits</h4>
                  <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                    {product.benefits.map((benefit, i) => (
                      <li key={i} style={{ fontSize: "0.9rem", color: "#555", marginBottom: "4px" }}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ color: "#facc15" }}>
                    {"⭐".repeat(5)} <span style={{ fontSize: "0.8rem", color: "#888" }}>(4.9)</span>
                  </div>
                  <Link to="/contact">
                    <button style={{
                      padding: "8px 12px",
                      backgroundColor: "#22c55e",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}>
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: "center",
          backgroundColor: "#e0f7ec",
          padding: "40px",
          marginTop: "60px",
          borderRadius: "8px"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
            Ready to Order?
          </h2>
          <p style={{ marginBottom: "24px", color: "#444" }}>
            Get in touch to place your order or learn more about our growing process.
          </p>
          <Link to="/contact">
            <button style={{
              padding: "10px 20px",
              backgroundColor: "#16a34a",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem"
            }}>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
