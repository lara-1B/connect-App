import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.component.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

      <div className="sidebar-item" onClick={toggleSidebar}>
        <i className='bx bx-menu'></i>
      </div>

      <Link to="/" className="sidebar-item">
        <i className='bx bx-home'></i>
        <span>Home</span>
      </Link>
      
      <Link to="/service-provider" className="sidebar-item">
        <i className='bx bx-tachometer'></i>
        <span>Dashboard</span>
      </Link>
      
      <div className="sidebar-item">
        <i className='bx bx-message'></i>
        <span>Messages</span>
      </div>

      <div className="spacer"></div>

      <div className="sidebar-item">
        <i className='bx bx-help-circle'></i>
        <span>FAQ</span>
      </div>
      
      <div className="sidebar-item">
        <i className='bx bx-cog'></i>
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
