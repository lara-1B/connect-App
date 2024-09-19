import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.component'; 
import Navbar from './components/Navbar/Navbar.component'; 
import './App.css'; 
import MainDashboard from './pages/MainDashboard'; 
import ServiceProvider from './pages/ServiceProvider';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/service-provider" element={<ServiceProvider />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
