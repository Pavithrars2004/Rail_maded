// src/components/MainLayout.js
import React from 'react';
import FirstNavbar from './FirstNavbar';
import SecondNavbar from './SecondNavbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
