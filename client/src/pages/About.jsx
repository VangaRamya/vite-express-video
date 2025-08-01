import React from "react";

const About = () => {
  const values = [
    {
      icon: "🌿",
      title: "Sustainability",
      description: "We use minimal water, no soil, and practice zero-waste growing methods.",
    },
    {
      icon: "❤️",
      title: "Health Focus",
      description: "Providing nutrient-dense food that supports our community's wellbeing.",
    },
    {
      icon: "🏠",
      title: "Local Production",
      description: "Growing food right in our urban environment reduces transportation impact.",
    },
    {
      icon: "👥",
      title: "Community",
      description: "Building connections through fresh, local food and shared values.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Started with a simple growing setup in our apartment, experimenting with different microgreen varieties.",
    },
    {
      year: "2024",
      title: "Growing Success",
      description: "Expanded our operation and began serving local customers with fresh, weekly harvests.",
    },
    {
      year: "Today",
      title: "Looking Forward",
      description: "Continuously improving our methods and expanding to serve more of our community.",
    },
  ];

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Our Story</h1>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            From apartment experiment to urban farming passion
          </p>
        </div>

        {/* Main Story */}
        <div style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          padding: "24px",
          borderRadius: "8px",
          marginBottom: "48px"
        }}>
          <h2 style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            🌿 How TrueLeaf Started
          </h2>
          <div style={{ lineHeight: "1.7", color: "#444" }}>
            <p>
              It all began with a simple question: "How can we grow our own fresh,
              nutritious food in a small urban apartment?" What started as curiosity
              about indoor gardening quickly became a passion for microgreens—those
              tiny, nutrient-packed seedlings that pack more vitamins and minerals
              than their full-grown counterparts.
            </p>
            <p>
              We transformed a corner of our living space into a mini growing operation,
              experimenting with different seeds, growing mediums, and techniques.
              The first harvest of sunflower microgreens was a revelation—the fresh,
              nutty flavor and incredible nutrition density convinced us we were onto something special.
            </p>
            <p>
              As our friends and neighbors tasted our microgreens, word spread about
              these "superfood seedlings" grown right in the heart of the city. What
              began as a personal project evolved into TrueLeaf Microgreens, a small
              business committed to providing fresh, locally grown nutrition to our community.
            </p>
            <p>
              Today, we're proud to offer five varieties of premium microgreens,
              each grown with sustainable practices and harvested at peak nutrition.
              Every batch is a testament to our belief that fresh, healthy food
              shouldn't require massive farms or long supply chains—sometimes the
              best nutrition comes from the smallest spaces.
            </p>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "24px" }}>Our Values</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}>
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: "#fff",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{
                    fontSize: "1.5rem",
                    backgroundColor: "#e6ffe6",
                    padding: "10px",
                    borderRadius: "50%"
                  }}>{value.icon}</div>
                  <div>
                    <h3 style={{ marginBottom: "8px", fontSize: "1.1rem", fontWeight: "600" }}>{value.title}</h3>
                    <p style={{ color: "#666" }}>{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "24px" }}>Our Journey</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  flexShrink: 0
                }}>
                  {milestone.year}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{milestone.title}</h3>
                  <p style={{ color: "#555" }}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          backgroundColor: "#e0f2f1",
          padding: "40px 20px",
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "24px" }}>
            Growing Impact
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px"
          }}>
            <div>
              <div style={{ fontSize: "2rem", color: "#22c55e", fontWeight: "bold" }}>5</div>
              <div style={{ color: "#666" }}>Microgreen Varieties</div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", color: "#22c55e", fontWeight: "bold" }}>100%</div>
              <div style={{ color: "#666" }}>Organic & Local</div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", color: "#22c55e", fontWeight: "bold" }}>7</div>
              <div style={{ color: "#666" }}>Days Fresh Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
