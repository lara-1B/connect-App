import React from 'react';
import './SubSection.css'; 

const SubSection = ({ icon, topText, bottomText, showButton = true }) => {
    return (
        <div className="sub-section-content">
            <div className="top-div">
                <div className="sub-icon-container">
                    <i className={`bx ${icon}`}></i> 
                </div>
                <div className="text-container">
                    <span className="sub-top-text">{topText}</span>
                    <span className="sub-bottom-text">{bottomText}</span>
                </div>
                {showButton && (
                    <div className="button-container">
                        <button className="raise-ticket-button">Raise a Ticket</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SubSection;
