import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './CardContent.css';

Chart.register(...registerables);

const CardContentHalf = ({ headerText, chartData, chartOptions }) => {

  const colors = chartData.datasets[0].backgroundColor instanceof Function
    ? chartData.labels.map((_, index) => chartData.datasets[0].backgroundColor({ dataIndex: index }))
    : chartData.datasets[0].backgroundColor;

  return (
    <div className="card-content-long">
      <div className="header">
        {headerText}
      </div>
      <div className="chart-container">
        <div className="pie-chart">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>
      <div className="pie-data-container">
        {chartData.labels.map((label, index) => (
          <div key={index} className="colored-data-item">
            <span className="legend-dot" style={{ backgroundColor: colors[index] }}></span>
            <span className="legend-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContentHalf;