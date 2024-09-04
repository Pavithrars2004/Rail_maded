// src/components/SecondNavbar.js
//import { default as React, default as React, useEffect, useRef, useState } from 'react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';



const SecondNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNavigation = (route) => {
    setShowDropdown(false); // Close the dropdown after navigating
    navigate(route);
  };



  return (
    <div className="second-navbar">
      <Link to="/" className="navbar-button">Home</Link>

      <div className="dropdown-container">
        <button onClick={handleDropdownToggle} className="upload-complaint-button">
          Upload Complaint
        </button>
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={() => handleNavigation('/train-complaint')}>Train</button>
            <button onClick={() => handleNavigation('/platform-complaint')}>Platform</button>
          </div>
        )}
      </div>

      {/* <Link to="/upload-complaint" className="navbar-button">Upload Complaint</Link> */}
      <Link to="/track-complaint" className="navbar-button">Track Complaint</Link>
      <Link to="/chat-with-passengers" className="navbar-button">Chat with Passengers</Link>
      <Link to="/parcel-complaint" className="navbar-button">Parcel Complaint</Link>
      <Link to="/track-parcel" className="navbar-button">Track Parcel</Link>
      <Link to="/feedbacks" className="navbar-button">Feedbacks</Link>
    </div>
  );
};


export default SecondNavbar;
