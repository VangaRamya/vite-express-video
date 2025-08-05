import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="not-found">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product, quantity);

    // Simulate loading
    setTimeout(() => {
      setIsAddingToCart(false);
      navigate('/cart');
    }, 1000);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb-nav">
          <Link to="/products" className="breadcrumb-link">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="product-layout">
          {/* Product Image Section */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="main-image"
              />
            </div>
          </div>

          {/* Product Information Section */}
          <div className="product-content">
            {/* Product Header */}
            <header className="product-header">
              <div className="product-title-section">
                <span className="product-icon">{product.icon}</span>
                <h1 className="product-title">{product.name}</h1>
              </div>
              <div className="product-pricing">
                <span className="product-price">{product.price}</span>
                <span className="product-weight">{product.weight}</span>
              </div>
            </header>

            {/* Product Tags */}
            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <span key={index} className="product-tag">{tag}</span>
              ))}
            </div>

            {/* Product Description */}
            <div className="product-description">
              <p>{product.description}</p>
            </div>

            {/* Health Benefits */}
            <section className="health-benefits">
              <h3 className="benefits-title">
                <span className="benefits-icon">❤️</span>
                Health Benefits
              </h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </section>


          </div>
          {/* Product Actions */}
          <section className="product-actions">
            {/* Quantity Selector */}
            <div className="quantity-section">
              <label htmlFor="quantity" className="quantity-label">Quantity:</label>
              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="quantity-btn quantity-btn-minus"
                  aria-label="Decrease quantity"
                >
                  <span>−</span>
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                  max={product.stock}
                  className="quantity-input"
                  aria-label="Product quantity"
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="quantity-btn quantity-btn-plus"
                  aria-label="Increase quantity"
                >
                  <span>+</span>
                </button>
              </div>
              <p className="stock-info">
                {product.stock} units available
              </p>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="btn btn-primary btn-add-to-cart"
              >
                {isAddingToCart ? (
                  <>
                    <span className="loading-spinner"></span>
                    Adding to Cart...
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>
              <Link to="/cart" className="btn btn-secondary btn-view-cart">
                View Cart
              </Link>
            </div>
          </section>

          {/* Product Meta Information */}
          <section className="product-meta">
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="star">⭐</span>
                ))}
              </div>
              <span className="rating-text">(4.9)</span>
            </div>

            <div className="delivery-info">
              <div className="delivery-item">
                <span className="delivery-icon">🚚</span>
                <span>Free delivery on orders over $30</span>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">📦</span>
                <span>Same day delivery available</span>
              </div>
            </div>
          </section>
        </div>

        {/* Related Products Section */}
        <section className="related-products">
          <h2 className="related-title">You might also like</h2>
          <div className="related-grid">
            {/* This could be populated with related products */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails; 