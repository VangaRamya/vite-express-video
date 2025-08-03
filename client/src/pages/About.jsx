import React from "react";
import "../styles/main.scss"; // ✅ Global styles already include _about.scss

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
      description:
        "Started with a simple growing setup in our apartment, experimenting with different microgreen varieties.",
    },
    {
      year: "2024",
      title: "Growing Success",
      description:
        "Expanded our operation and began serving local customers with fresh, weekly harvests.",
    },
    {
      year: "Today",
      title: "Looking Forward",
      description:
        "Continuously improving our methods and expanding to serve more of our community.",
    },
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <h1>Our Story</h1>
          <p>From apartment experiment to urban farming passion</p>
        </div>

        {/* Main Story */}
        <div className="about-story">
          <h2>🌿 How TrueLeaf Started</h2>
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

        {/* Our Values */}
        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <div className="value-text">
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="about-timeline">
          <h2>Our Journey</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className="milestone">
                <div className="milestone-year">{m.year}</div>
                <div className="milestone-content">
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <h2>Growing Impact</h2>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-value">5</div>
              <div className="stat-label">Microgreen Varieties</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Organic & Local</div>
            </div>
            <div className="stat">
              <div className="stat-value">7</div>
              <div className="stat-label">Days Fresh Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
