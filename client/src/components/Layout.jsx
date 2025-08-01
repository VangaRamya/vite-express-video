import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: "#fff", borderBottom: "1px solid #ddd", padding: "0 20px" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px"
        }}>
          {/* Logo */}
          <NavLink to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#222" }}>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold", marginRight: "8px" }}>🌱</span>
            <span style={{ fontSize: "1.25rem", fontWeight: "600" }}>TrueLeaf Microgreens</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div style={{ display: "none", gap: "16px" }} className="desktop-nav">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                style={({ isActive }) => ({
                  padding: "8px 12px",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderBottom: isActive ? "2px solid green" : "none",
                  color: isActive ? "green" : "#444",
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-toggle"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{ padding: "10px 0", backgroundColor: "#f0f0f0" }} className="mobile-nav">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                style={({ isActive }) => ({
                  display: "block",
                  padding: "10px 20px",
                  textDecoration: "none",
                  backgroundColor: isActive ? "#d1e7dd" : "transparent",
                  color: isActive ? "#0f5132" : "#333",
                  fontWeight: "500"
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main style={{ padding: "20px", backgroundColor: "#fff" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ marginTop: "40px", borderTop: "1px solid #ddd", padding: "20px 0", backgroundColor: "#fff" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontSize: "1.25rem", marginRight: "8px" }}>🌱</span>
            <span style={{ fontWeight: "600" }}>TrueLeaf Microgreens</span>
          </div>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Fresh, organic microgreens grown with love and sustainable practices.
          </p>
          <p style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>
            © 2024 TrueLeaf Microgreens. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Responsive Behavior */}
      <style>
        {`
          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
            .mobile-toggle,
            .mobile-nav {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
