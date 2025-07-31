import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
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
      alert("You must accept our terms and conditions to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
          products: [],
          message: "",
          terms: false,
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to experience fresh, locally grown microgreens? Contact us to
            place an order or learn more about our growing process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold flex items-center mb-4">
                🌿 Contact Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-2">
                  <span>📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p>hello@trueleafmicrogreens.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>📞</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <div>
                    <p className="font-medium">Location</p>
                    <p>Urban Farm, Downtown Area</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span>⏰</span>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-sm text-gray-700 space-y-2">
              <h3 className="text-lg font-semibold mb-2">Order Information</h3>
              <ul className="list-disc list-inside">
                <li>Fresh microgreens cut to order</li>
                <li>Minimum order: $20</li>
                <li>Local delivery available</li>
                <li>Pickup appointments welcome</li>
                <li>Wholesale pricing for restaurants</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Full Name *</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full border rounded px-3 py-2"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Order Type *</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    required
                    value={formData.orderType}
                    onChange={(e) =>
                      setFormData({ ...formData, orderType: e.target.value })
                    }
                  >
                    <option value="">Select order type</option>
                    <option value="personal">Personal Order</option>
                    <option value="restaurant">Restaurant/Business</option>
                    <option value="weekly">Weekly Subscription</option>
                    <option value="inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Which microgreens interest you?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {microgreens.map((product) => (
                    <label key={product} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.products.includes(product)}
                        onChange={(e) =>
                          handleProductChange(product, e.target.checked)
                        }
                      />
                      <span>{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Message or Special Requirements
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded px-3 py-2"
                  placeholder="Tell us about your order, delivery preferences, questions, etc..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({ ...formData, terms: e.target.checked })
                  }
                />
                <label className="text-sm">
                  I agree to the terms and conditions and understand orders are
                  subject to availability and seasonal growing schedules.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
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
