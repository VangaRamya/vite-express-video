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
        <div className="breadcrumb">
          <Link to="/products">Products</Link>
          <span> / </span>
          <span>{product.name}</span>
        </div>

        <div className="product-details">
          <div className="product-images">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>

          <div className="product-info">
            <div className="product-header">
              <div className="product-title">
                <span className="product-icon">{product.icon}</span>
                <h1>{product.name}</h1>
              </div>
              <div className="product-price">
                <span className="price">{product.price}</span>
                <small className="weight">{product.weight}</small>
              </div>
            </div>

            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-benefits">
              <h3>❤️ Health Benefits</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    min="1"
                    max={product.stock}
                    className="quantity-input"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <small className="stock-info">
                  {product.stock} units available
                </small>
              </div>

              <div className="action-buttons">
                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="btn-add-to-cart"
                >
                  {isAddingToCart ? "Adding to Cart..." : "Add to Cart"}
                </button>
                <Link to="/cart" className="btn-view-cart">
                  View Cart
                </Link>
              </div>
            </div>

            <div className="product-meta">
              <div className="rating">
                {"⭐".repeat(5)} <small>(4.9)</small>
              </div>
              <div className="delivery-info">
                <p>🚚 Free delivery on orders over $30</p>
                <p>📦 Same day delivery available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products">
          <h2>You might also like</h2>
          <div className="related-grid">
            {/* This could be populated with related products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 