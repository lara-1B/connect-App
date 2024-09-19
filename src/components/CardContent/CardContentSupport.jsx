import React from 'react';
import './CardContent.css';

const SupportCard = ({
    userIcon,
    userId,
    userName,
    supportType,
    errorType,
    subject,
    description,
    status,
    haveChildren = false,
    children
}) => {
    const statusStyles = {
        open: {
            borderColor: 'rgba(0, 123, 255, 0.4)', 
            backgroundColor: 'rgba(0, 123, 255, 0.2)', 
        },
        onHold: {
            borderColor: 'rgba(255, 193, 7, 0.4)', 
            backgroundColor: 'rgba(255, 193, 7, 0.2)', 
        },
        acknowledge: {
            borderColor: 'rgba(220, 53, 69, 0.4)', 
            backgroundColor: 'rgba(220, 53, 69, 0.2)', 
        },
        resolved: {
            borderColor: 'rgba(34,164,81,255)', 
            backgroundColor: 'rgba(230,245,236,255)', 
        }
    };

    const { borderColor, backgroundColor } = statusStyles[status.toLowerCase()] || statusStyles.acknowledge;

    return (
        <div className="support-card">
            <div className="support-card-top">
                <div className="user-info">
                    <i className={`support-user-icon bx ${userIcon}`}></i>
                    <div className="user-details">
                        <span className="user-id">{userId}</span>
                        <span className="user-name">{userName}</span>
                    </div>
                </div>
                <div className="support-types">
                    <span className="support-type">{supportType}</span>
                    <span className="error-type">{errorType}</span>
                </div>
            </div>

            {!haveChildren ? (
                <div className="support-card-middle">
                    <h3 className="support-subject">{subject}</h3>
                    <p className="support-description">{description}</p>
                </div>
            ) : (
                <div className="support-card-children">
                    {children}
                </div>
            )}

            {!haveChildren && (
                <div className="support-card-bottom" style={{ borderColor, backgroundColor }}>
                    <span className="status">Status: {status}</span>
                </div>
            )}
        </div>
    );
};

export default SupportCard;