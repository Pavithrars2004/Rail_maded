import React from 'react';
import './Home.css'; // Add styling in this file

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="overlay">
          <h1>Welcome to Rail Complaint Management</h1>
          <p>Enhancing railways for a better tomorrow. Share your feedback and complaints today!</p>
          <a href="/platform-complaint" className="cta-button">File a Complaint</a>
        </div>
      </header>

      <section className="features-section">
        <div className="feature-card">
          <h2>Track Complaints</h2>
          <p>Monitor your complaint status with real-time updates.</p>
        </div>
        <div className="feature-card">
          <h2>Platform Issues</h2>
          <p>Facing any issues at a station platform? Report them now.</p>
        </div>
        <div className="feature-card">
          <h2>Train Complaints</h2>
          <p>Encountered problems during your journey? Let us know.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Rail Complaint Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
