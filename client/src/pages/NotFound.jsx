import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/main.scss"; // ensure global SCSS is available

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1>404</h1>
        <p>Oops! Page not found</p>
        <Link to="/" className="notfound-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
