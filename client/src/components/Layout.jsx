// src/components/Layout.jsx
import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, logout } = useAuth();

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
          {/* Desktop Layout */}
          <div className="desktop-layout">
            {/* Logo */}
            <Link to="/" className="logo">
              <span className="logo-icon">🌱</span>
              <span className="logo-text">TrueLeaf Microgreens</span>
            </Link>

            {/* Desktop Navigation Links */}
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

            {/* Desktop Actions */}
            <div className="desktop-actions">
              <Link to="/cart" className="cart-icon">
                🛒
                {getCartCount() > 0 && (
                  <span className="cart-badge">{getCartCount()}</span>
                )}
              </Link>
              
              {user ? (
                <div className="user-menu">
                  <button
                    className="user-menu-toggle"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    👤 {user.name}
                  </button>
                  {isUserMenuOpen && (
                    <div className="user-dropdown">
                      <Link to="/profile" className="dropdown-item">
                        📋 Profile
                      </Link>
                      <Link to="/orders" className="dropdown-item">
                        📦 Orders
                      </Link>
                      <button onClick={logout} className="dropdown-item">
                        🚪 Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="login-btn">
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="mobile-layout">
            {/* Left: Hamburger + Logo */}
            <div className="mobile-left">
              <button
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
              <Link to="/" className="mobile-logo">
                Microgreens
              </Link>
            </div>

            {/* Center: Search */}
            <div className="mobile-search">
              <div className="search-box">🔍</div>
            </div>

            {/* Right: Cart + User */}
            <div className="mobile-right">
              <Link to="/cart" className="cart-icon">
                🛒
                {getCartCount() > 0 && (
                  <span className="cart-badge">{getCartCount()}</span>
                )}
              </Link>

              {user ? (
                <div className="user-menu">
                  <button
                    className="user-menu-toggle"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    👤
                  </button>
                  {isUserMenuOpen && (
                    <div className="user-dropdown">
                      <Link to="/profile" className="dropdown-item">
                        📋 Profile
                      </Link>
                      <Link to="/orders" className="dropdown-item">
                        📦 Orders
                      </Link>
                      <button onClick={logout} className="dropdown-item">
                        🚪 Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="login-btn">
                  👤
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
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
