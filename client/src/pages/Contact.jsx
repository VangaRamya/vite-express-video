import React, { useState } from "react";
import "../styles/main.scss"; // Globally available styles

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        orderType: "",
        address: "",
        landmark: "",
        products: [],
        message: "",
        terms: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const microgreens = [
        "Sunflower Microgreens",
        "Radish Microgreens",
        "Wheatgrass Microgreens",
        "Pea Shoot Microgreens",
        "Mustard Microgreens",
    ];

    const handleProductChange = (product, checked) => {
        setFormData((prev) => ({
            ...prev,
            products: checked
                ? [...prev.products, product]
                : prev.products.filter((p) => p !== product),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.terms) {
            alert("Please accept terms and conditions.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch("https://vite-express-video.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    orderType: "",
                    address: "",
                    landmark: "",
                    products: [],
                    message: "",
                    terms: false,
                });
            } else {
                throw new Error(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Submission failed. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <h1>Get in Touch</h1>
                    <p>
                        Ready to experience fresh, locally grown microgreens? Contact us to
                        place an order or learn more about our growing process.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>🌿 Contact Information</h3>
                            <div className="info-item">
                                <span>📧</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>hello@trueleafmicrogreens.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span>📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span>📍</span>
                                <div>
                                    <strong>Location</strong>
                                    <p>Urban Farm, Downtown Area</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <span>⏰</span>
                                <div>
                                    <strong>Response Time</strong>
                                    <p>Within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <h3>Order Information</h3>
                            <ul>
                                <li>Fresh microgreens cut to order</li>
                                <li>Minimum order: $20</li>
                                <li>Local delivery available</li>
                                <li>Pickup appointments welcome</li>
                                <li>Wholesale pricing for restaurants</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <h3>Place Your Order</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Order Type *</label>
                                    <select
                                        required
                                        value={formData.orderType}
                                        onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                                    >
                                        <option value="">Select order type</option>
                                        <option value="personal">Personal Order</option>
                                        <option value="restaurant">Restaurant/Business</option>
                                        <option value="weekly">Weekly Subscription</option>
                                        <option value="inquiry">General Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Address *</label>
                                    <input
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Landmark *</label>
                                    <input
                                        required
                                        value={formData.landmark}
                                        onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Which microgreens interest you?</label>
                                <div className="checkbox-grid">
                                    {microgreens.map((product) => (
                                        <label key={product} className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={formData.products.includes(product)}
                                                onChange={(e) =>
                                                    handleProductChange(product, e.target.checked)
                                                }
                                            />
                                            {product}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message or Special Requirements</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your order, delivery preferences, etc."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <div className="form-group checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={formData.terms}
                                    onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                                />
                                I agree to the terms and understand availability may vary.
                            </div>

                            <button type="submit" className="btn" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
