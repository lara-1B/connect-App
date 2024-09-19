
import React, { useEffect } from 'react';
import './CardContent.css';
import { Line, Pie } from 'react-chartjs-2';

const CardContentSmall = ({ 
  icon, 
  topText, 
  bottomText, 
  chartData, 
  chartOptions, 
  textSection, 
  isRatingCard, 
  userName, 
  userRating, 
  chartType 
}) => {
  useEffect(() => {
    return () => {

      if (window.Chart && window.Chart.instances) {
        window.Chart.instances.forEach((instance) => {
          instance.destroy();
        });
      }
    };
  }, []);
  
  const renderRatingSection = () => (
    <div className="rating-section">
      <div className="rating-text">Average Rating</div>
      <div className="rating-stars">
        {[...Array(5)].map((_, index) => (
          <i key={index} className={`bx bx-star ${index < userRating ? 'filled' : ''}`}></i>
        ))}
      </div>
    </div>
  );
  
  const renderUserSection = () => (
    <div className="user-info">
      <i className="bx bx-user"></i>
      <span className="user-name">{userName}</span>
    </div>
  );
  
  return (
    <div className="card-content-small">
      <div className="top-div">
        <div className="icon-container">
          <i className={`bx ${icon}`}></i> 
        </div>
        <div className="text-container">
          <span className="top-text">{topText}</span>
          <span className="bottom-text">{bottomText}</span>
        </div>
      </div>
      <div className="separator"></div>
      <div className="bottom-div">
        {isRatingCard ? (
          <>
            {renderRatingSection()}
            {renderUserSection()}
            <div className="view-all-container">
              <button className="view-all-button">View All</button>
              <span className="last-updated">1 day ago</span>
            </div>
          </>
        ) : (
          <div className="chart-section">
            {chartType === 'line' ? (
              <Line data={chartData} options={chartOptions} height={100} />
            ) : chartType === 'pie' ? (
              <Pie data={chartData} options={chartOptions} height={100} />
            ) : null}
          </div>
        )}
        <div className="text-section">
          <span dangerouslySetInnerHTML={{ __html: textSection }}></span> 
        </div>
      </div>
    </div>
  );
};

export default CardContentSmall;
