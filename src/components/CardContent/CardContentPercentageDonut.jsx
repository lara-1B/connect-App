import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import percentagePlugin from '../../config/percentagePlugin'
import './CardContent.css'

const chartData = {
  labels: ['HealthCare Sector', 'Construction Sector', 'Home Services Sector', 'Petcare Sector', 'Entertainment Sector', 'Event Sector'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57', '#3357FF']
    }
  ]
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false 
    },
    tooltip: {
      enabled: true 
    },
    percentagePlugin 
  }
};

const CardContentPercentageDonut = ({ headerText }) => {
  return (
    <div className="percentage-donut-chart-container">
      <div className='percentage-left'>
        <div className="percentage-donut-chart-header">
          {headerText}
        </div>
        <div className="percentage-donut-chart-content">
          <div className="percentage-donut-chart-donut">
            <Doughnut data={chartData} options={chartOptions} plugins={[percentagePlugin]} />
          </div>
        </div>
      </div>
      <div className="percentage-donut-chart-legend">
        {chartData.labels.map((label, index) => (
          <div key={index} className="percentage-donut-legend-item">
            <span className="percentage-donut-legend-dot" style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></span>
            <span className="percentage-donut-legend-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContentPercentageDonut;