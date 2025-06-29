import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

function NotFound() {
  return (
    <section>
      <div className="container notFound__container">
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
