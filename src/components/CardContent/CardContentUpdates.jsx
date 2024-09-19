import React from 'react';
import { Link } from 'react-router-dom';
import './CardContent.css'

const CardContentUpdates = ({ headerText, notifications }) => {
    return (
        <div className="card-container-updates">
            <div className="update-card-header">
                <span>{headerText}</span>
                <Link to="/updates" className="update-card-button">View All</Link>
            </div>
            <div className="update-card-content">
                {notifications.map((notification, index) => (
                    <div 
                        key={index} 
                        className="notification-item" 
                        style={{ borderColor: notification.borderColor, backgroundColor: `${notification.borderColor}66` }}
                    >
                        <div className="notification-title">{notification.title}</div>
                        <div className="notification-text">{notification.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CardContentUpdates;
