import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './CardContent.css';

Chart.register(...registerables);

const CardContentWide = ({ headerText, chartData, chartOptions }) => {
  const updatedChartOptions = {
    ...chartOptions,
    maintainAspectRatio: false,
  };

  return (
    <div className="card-content-wide">
      <div className="header">{headerText}</div>
      <div className="chart-container">
        <div className="wide-chart">
          <Line data={chartData} options={updatedChartOptions} />
        </div>
      </div>
      <div className="medium-data-container">
        {chartData.datasets.map((dataset, index) => (
          <div key={index} className="colored-data-item">
            <span className="legend-dot" style={{ backgroundColor: dataset.borderColor }}></span>
            <span className="legend-label">{dataset.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardContentWide;
