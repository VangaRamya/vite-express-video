// src/components/Layout.jsx
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
    <div className="layout">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">TrueLeaf Microgreens</span>
          </NavLink>

          <div className="desktop-nav">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "mobile-link active" : "mobile-link"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">TrueLeaf Microgreens</span>
          </div>
          <p className="footer-tagline">
            Fresh, organic microgreens grown with love and sustainable practices.
          </p>
          <p className="footer-copyright">
            © 2024 TrueLeaf Microgreens. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
