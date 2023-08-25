import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">RealEstate</div>
        <p className="footer-text">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
