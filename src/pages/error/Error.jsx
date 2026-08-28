import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";

function ErrorPage() {
  return (
    <main className="error-page">
      <div className="error-content">
        <p className="error-code">404</p>
        <h1>Page not found</h1>
        <p className="error-message">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="error-home-link">
          Back to home
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
