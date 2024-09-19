import React from 'react';
import './Navbar.component.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">

      <div className="search-container">
        <i className="bx bx-search search-icon"></i>
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      <div className="navbar-items">

        <div className="icon-wrapper notifications">
          <i className="bx bx-bell"></i>
          <span className="counter">3</span> {}
        </div>

        <div className="icon-wrapper messages">
          <i className="bx bx-message"></i>
          <span className="counter">7</span> {}
        </div>

        <div className="icon-wrapper settings">
          <i className="bx bx-cog"></i>
        </div>

        <div className="user-section">
          <i className="bx bx-user"></i>
          <span>Hi, John</span>
          <i className="bx bx-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;