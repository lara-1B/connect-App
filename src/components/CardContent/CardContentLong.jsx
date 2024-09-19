import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2'; 
import './CardContent.css';

const CardContentLong = ({ 
  headerText, 
  chartData, 
  chartOptions, 
  activeOrders, 
  completedOrders, 
  centerText, 
  centerNumber, 
  chartType = 'doughnut' 
}) => {

  const ChartComponent = chartType === 'pie' ? Pie : Doughnut;

  return (
    <div className="card-content-long">
      <div className="header">
        {headerText}
      </div>
      <div className="chart-container">
        <div className="long-chart">
          <ChartComponent
            data={chartData}
            options={chartOptions}
            height={150}
            width={150}
          />
          <div className="chart-text">
            {centerText} <p className='chart-number'> {centerNumber} </p>
          </div>
        </div>
      </div>

      {chartType !== 'pie' && (
        <div className="data-container">
          <div className="data-item">
            <span className="data-label">Active Orders:</span>
            <span className="data-value">{activeOrders}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Completed Orders:</span>
            <span className="data-value">{completedOrders}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardContentLong;