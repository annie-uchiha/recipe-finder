import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="header">
      <h1>Find the perfect recipe for your occasion</h1> {/* Headline Text */}
      {children}
    </div>
  );
};

export default Layout;
