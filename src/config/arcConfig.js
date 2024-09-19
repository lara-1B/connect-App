import { ArcElement, Tooltip, Legend } from 'chart.js';

export const arcConfig = (percent) => ({
  type: 'doughnut',
  data: {
    datasets: [
      {
        data: [percent, 100 - percent], 
        backgroundColor: ['rgba(75, 192, 192, 1)', 'rgba(204, 204, 204, 1)'], 
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(204, 204, 204, 1)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0, 
        borderRadius: 0, 
      },
    },
    cutout: '50%', 
    rotation: -Math.PI, 
    circumference: Math.PI, 
  },
});