import React from 'react';
import { Bar, Line } from 'react-chartjs-2'; 
import { Chart, registerables } from 'chart.js';
import './CardContent.css';

Chart.register(...registerables);

const CardContentMedium = ({ headerText, chartData, chartOptions, chartType = 'bar' }) => {
  const colors = chartData.datasets[0].backgroundColor instanceof Function
    ? chartData.labels.map((_, index) => chartData.datasets[0].backgroundColor({ dataIndex: index }))
    : chartData.datasets[0].backgroundColor;
  const ChartComponent = chartType === 'line' ? Line : Bar;

  return (
    <div className="card-content-medium">
      <div className="header">
        {headerText}
      </div>
      <div className="chart-container">
        <div className="medium-chart">
          <ChartComponent
            data={chartData}
            options={chartOptions}
          />
        </div>
      </div>
   
      {chartType === 'bar' && (
        <div className="medium-data-container">
          {chartData.labels.map((label, index) => (
            <div key={index} className="colored-data-item">
              <span className="legend-dot" style={{ backgroundColor: colors[index] }}></span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardContentMedium;
