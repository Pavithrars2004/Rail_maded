// src/components/FirstNavbar.js
import React, { useEffect } from 'react';
import './Navbar.css';
import logo from './small.png';
const FirstNavbar = () => {
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,en,kn,ml,ta,te,mr,bn,gu,pa,ur',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );

        const setDefaultLanguage = () => {
          const select = document.querySelector('.goog-te-combo');
          if (select) {
            select.value = 'en';
            select.dispatchEvent(new Event('change'));
          }
        };

        setTimeout(setDefaultLanguage, 500);
      }
    };

    addGoogleTranslate();
  }, []);

  return (
    <div className="first-navbar">
      <img src={logo} alt="Logo" className="logo" />
      <button className="call-button">Call 139</button>
      <div id="google_translate_element" className="language-translation-button"></div>
      <div className="auth-buttons">
        <button className="sign-up-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default FirstNavbar;