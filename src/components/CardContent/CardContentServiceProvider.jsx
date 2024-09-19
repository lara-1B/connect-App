import React from 'react';
import './CardContent.css';
const CardContentServiceProvider = ({ imageSrc, headerText, userCount, value }) => {
    return (
        <div className="card-content-service-provider">
            <div className="image-container">
                <img src={imageSrc} alt="Service Provider" className="provider-image" />
            </div>
            <div className="details-container">
                <div className="header-section">
                    <span className="header-text">{headerText}</span>
                </div>
                <div className="stats-section">
                    <div className="user-stats">
                        <div className="user-icon-group">
                            <i className="bx bx-user user-icon"></i>
                            <i className="bx bx-user user-icon"></i>
                            <i className="bx bx-user user-icon"></i>
                        </div>
                        <div>
                            <span className="user-count">+{userCount}</span>
                        </div>
                    </div>
                    <div className="value-section">
                        <span className="value-text">{value}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContentServiceProvider;
