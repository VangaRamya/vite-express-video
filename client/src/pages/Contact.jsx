import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  background-color: #f9fafb;
  color: #111827;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionDescription = styled.p`
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  & > div {
    font-size: 0.875rem;
    p {
      margin: 4px 0;
    }
  }

  & span {
    font-size: 1.125rem;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 80%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 90%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 93%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.4;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #16a34a;
  color: white;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #15803d;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

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
            alert("You must accept our terms and conditions to proceed.");
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
        <Container>
            <Wrapper>
                <SectionTitle>Get in Touch</SectionTitle>
                <SectionDescription>
                    Ready to experience fresh, locally grown microgreens? Contact us to
                    place an order or learn more about our growing process.
                </SectionDescription>

                <Grid>
                    {/* Contact Info */}
                    <div>
                        <Card>
                            <CardTitle>🌿 Contact Information</CardTitle>
                            <InfoItem>
                                <span>📧</span>
                                <div>
                                    <p><strong>Email</strong></p>
                                    <p>hello@trueleafmicrogreens.com</p>
                                </div>
                            </InfoItem>
                            <InfoItem>
                                <span>📞</span>
                                <div>
                                    <p><strong>Phone</strong></p>
                                    <p>(555) 123-4567</p>
                                </div>
                            </InfoItem>
                            <InfoItem>
                                <span>📍</span>
                                <div>
                                    <p><strong>Location</strong></p>
                                    <p>Urban Farm, Downtown Area</p>
                                </div>
                            </InfoItem>
                            <InfoItem>
                                <span>⏰</span>
                                <div>
                                    <p><strong>Response Time</strong></p>
                                    <p>Within 24 hours</p>
                                </div>
                            </InfoItem>
                        </Card>

                        <Card>
                            <CardTitle>Order Information</CardTitle>
                            <ul>
                                <li>Fresh microgreens cut to order</li>
                                <li>Minimum order: $20</li>
                                <li>Local delivery available</li>
                                <li>Pickup appointments welcome</li>
                                <li>Wholesale pricing for restaurants</li>
                            </ul>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <CardTitle>Place Your Order</CardTitle>

                            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr" }}>
                                <div>
                                    <Label>Full Name *</Label>
                                    <Input
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Email Address *</Label>
                                    <Input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr", marginTop: "1rem" }}>
                                <div>
                                    <Label>Phone Number</Label>
                                    <Input
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Order Type *</Label>
                                    <Select
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
                                    </Select>
                                </div>
                            </div>

                            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr", marginTop: "1rem" }}>
                                <div>
                                    <Label>Address *</Label>
                                    <Input
                                        required
                                        value={formData.address}
                                        onChange={(e) =>
                                            setFormData({ ...formData, address: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <Label>Landmark *</Label>
                                    <Input
                                        required
                                        value={formData.landmark}
                                        onChange={(e) =>
                                            setFormData({ ...formData, landmark: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            <div style={{ marginTop: "1rem" }}>
                                <Label>Which microgreens interest you?</Label>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "0.5rem" }}>
                                    {microgreens.map((product) => (
                                        <CheckboxLabel key={product}>
                                            <input
                                                type="checkbox"
                                                checked={formData.products.includes(product)}
                                                onChange={(e) =>
                                                    handleProductChange(product, e.target.checked)
                                                }
                                            />
                                            {product}
                                        </CheckboxLabel>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: "1rem" }}>
                                <Label>Message or Special Requirements</Label>
                                <Textarea
                                    rows="4"
                                    placeholder="Tell us about your order, delivery preferences, questions, or any special requirements"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            <div style={{ marginTop: "1rem" , marginBottom: "1rem"}}>
                                <CheckboxLabel>
                                    <input
                                        type="checkbox"
                                        checked={formData.terms}
                                        onChange={(e) =>
                                            setFormData({ ...formData, terms: e.target.checked })
                                        }
                                    />
                                    I agree to the terms and conditions and understand orders are
                                    subject to availability and seasonal growing schedules.
                                </CheckboxLabel>
                            </div>

                            <SubmitButton type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </SubmitButton>
                        </form>
                    </Card>
                </Grid>
            </Wrapper>
        </Container>
    );
};

export default Contact;
