// Footer.jsx

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">Townmanor</h2>
          <p>
            Find your dream property with ease. Trusted real estate platform
            for buying, selling, and renting homes.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@townmanor.in</p>
          <p>Phone: +91 9876543210</p>
          <p>Delhi, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Townmanor. All Rights Reserved.</p>
      </div>
    </footer>
  );
}