import React from 'react';
import { Link } from 'react-router-dom';
import './SplashPage.css';

function SplashPage() {
  return (
    <div className="splash-container">
      <div className="title">
        <span className="real">REAL</span>
        <span className="estate">ESTATE</span>
        <span className="nate">NATE</span>
      </div>
      <div className="anchor-logo-container">
        <img src="./invert.png" alt="Anchor Logo" className="anchor-logo" />
      </div>
      <div className="button-container">
        <Link to="/info" className="enter-button">Enter Here</Link>
      </div>
      <div className="quote">Turning your future into today's reality</div>
    </div>
  );
}

export default SplashPage;
