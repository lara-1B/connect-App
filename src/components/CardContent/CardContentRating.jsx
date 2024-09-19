import React from 'react';
import './CardContent.css'; 

const CardContentRating = ({
    icon,
    topText,
    bottomText,
    userName,
    userRating,
    viewAllText,
    timeAgoText
}) => {
    return (
        <div className="card-content-rating"> {}
            <div className="rating-top-div">
                <div className="rating-icon-container">
                    <i className={`bx ${icon}`}></i>
                </div>
                <div className="rating-text-container">
                    <span className="rating-top-text">{topText}</span>
                    <div className="rating-bottom-text">
                        {Array.from({ length: 5 }, (_, i) => (
                            <i
                                key={i}
                                className={`bx bxs-star ${i < userRating ? 'filled' : ''}`}
                            ></i>
                        ))}
                    </div>
                </div>
            </div>
            <div className="rating-separator"></div>
            <div className="rating-bottom-div">
                <div className="rating-user-icon-container">
                    <div className="rating-user-icon">
                        <i className='bx bx-user'></i> {}
                    </div>
                    <div className="rating-user-info">
                        <span className="rating-user-name">{userName}</span>
                        <div className="rating-stars">
                            {Array.from({ length: 5 }, (_, i) => (
                                <i
                                    key={i}
                                    className={`bx bxs-star ${i < userRating ? 'filled' : ''}`}
                                ></i>
                            ))}
                            <div className="rating-button-section">
                                <button className="rating-view-all-button">{viewAllText}</button>
                                <span className="rating-time-ago-text">{timeAgoText}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardContentRating;