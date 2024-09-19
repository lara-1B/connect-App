import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const chartOptionsNoLabels = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false, 
      type: 'category',
    },
    y: {
      display: false, 
      type: 'linear',
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: false, 
    },
  },
};

export const chartOptionsWithLabels = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true, 
    },
    y: {
      display: true, 
    },
  },
  plugins: {
    legend: {
      display: true, 
    },
    tooltip: {
      enabled: true, 
    },
  },
};

export const chartOptionsDonut = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '85%', 
  rotation: -135, 
  circumference: 270, 
  elements: {
    arc: {
      borderWidth: 0, 
      borderRadius: 10
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: false, 
    },
  },
};

export const chartOptionsBar = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      display: false, 
      stacked: true,
      grid: {
        borderColor: '#ddd', 
        borderDash: [5, 5],  
      },
    },
    y: {
      display: true, 
      stacked: true,
      ticks: {
        stepSize: 30,
        max: 150,
      },
      grid: {
        borderColor: '#ddd', 
        borderDash: [5, 5],  
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },

  elements: {
    bar: {
      borderRadius: 15, 
    },
  },

  layout: {
    padding: {
      left: 10,  
      right: 10, 
      top: 20,   
      bottom: 20 
    },
  },
};

export const chartOptionsPie = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '0%', 
  rotation: 0, 
  circumference: 360, 
  elements: {
    arc: {
      borderWidth: 2, 
      borderRadius: 5 
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: true, 
    },
  },
};

export const chartOptionsWide = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Day of the Week'
      },
    },
    y: {
      title: {
        display: true,
        text: 'Value'
      },
      ticks: {
        stepSize: 1000,
        callback: (value) => `${value}`
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'bottom'
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
      }
    }
  }
};

export const chartOptionsCircle = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '0%', 
  rotation: 0, 
  circumference: 360, 
  elements: {
    arc: {
      borderWidth: 2, 
      borderRadius: 5, 
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: true, 
    },
  },
};
export const chartOptionsServiceOfferingPie = {
  responsive: true,
  maintainAspectRatio: false,
  rotation: -135, 
  circumference: 360, 
  elements: {
    arc: {
      borderWidth: 0, 
      borderRadius: 10, 
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: true, 
    },
  },
};

export const chartOptionsServiceOfferingLine = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true, 
      title: {
        display: true,
        text: 'Month', 
      },
      ticks: {
        autoSkip: true, 
        maxTicksLimit: 12, 
      },
    },
    y: {
      display: true, 
      title: {
        display: true,
        text: 'Value', 
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: false, 
    },
  },
};

export const chartDataServiceProviderDonut = {
  labels: ['HealthCare Sector', 'Construction Sector', 'Home Services Sector', 'Petcare Sector', 'Entertainment Sector', 'Event Sector'],
  datasets: [
    {
      data: [15, 25, 10, 20, 15, 15], 
      backgroundColor: [
        '#FF6384', 
        '#36A2EB', 
        '#FFCE56', 
        '#4BC0C0', 
        '#F9A825', 
        '#F57C00', 
      ],
      borderWidth: 1,
    },
  ],
};

export const chartDataDown = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Total Sales',
      data: [50, 45, 60, 55, 70, 65], 
      borderColor: 'rgba(255, 99, 132, 1)', 
      borderWidth: 2,
      fill: false, 
      cubicInterpolationMode: 'monotone', 
    },
  ],
};

export const chartDataUp = {
    labels: ['1', '2', '3', '4', '5', '6'],

  datasets: [
    {
      label: 'Total Customers',
      data: [10, 7, 12, 11, 15, 20], 
      borderColor: 'rgba(75, 192, 192, 1)', 
      borderWidth: 2,
      fill: false,
      cubicInterpolationMode: 'monotone', 
    },
  ],
};

export const chartDataSlightUp = {
    labels: ['1', '2', '3', '4', '5', '6'],

  datasets: [
    {
      label: 'Total Orders',
      data: [10, 15, 12, 18, 14, 20],
      borderColor: 'rgba(255, 206, 86, 1)', 
      borderWidth: 2,
      fill: false,
      cubicInterpolationMode: 'monotone', 
    },
  ],
};

export const chartDataDonut = {
  labels: ['Completed', 'Remaining'],
  datasets: [{
    label: 'Order Status',
    data: [67, 33], 
    backgroundColor: ['rgba(74,58,255,255)', 'rgba(255, 255, 153, 1)'], 
    borderWidth: 0, 
  }],
};

export const chartDataBar = {
  labels: [
    'Active Service Provider',
    'Service Provider Retention Rate',
    'New Service Provider',
    'Service Completion Rate',
    'Total Service Provider',
    'Average Rating'
  ],
  datasets: [
    {
      label: 'Metrics',
      data: [100, 120, 135, 80, 25, 120],
      backgroundColor: (context) => {
        const index = context.dataIndex;
        const colors = [
          'rgba(255, 132, 124, 1)', 
          'rgba(22, 93, 201, 1)',   
          'rgba(67, 198, 191, 1)',  
          'rgba(114, 35, 145, 1)',  
          'rgba(217, 139, 207, 1)', 
          'rgba(255, 212, 97, 1)'   
        ];
        return colors[index % colors.length]; 
      },
      borderColor: (context) => {
        const index = context.dataIndex;
        const colors = [
          'rgba(255, 132, 124, 1)', 
          'rgba(22, 93, 201, 1)',   
          'rgba(67, 198, 191, 1)',  
          'rgba(114, 35, 145, 1)',  
          'rgba(217, 139, 207, 1)', 
          'rgba(255, 212, 97, 1)'   
        ];
        return colors[index % colors.length]; 
      },
      borderWidth: 1,
    }
  ],
};

export const chartDataPie = {
  labels: ['Completed', 'Remaining'],
  datasets: [
    {
      data: [85, 15], 
      backgroundColor: ['#4caf50', '#ffffff'], 
      borderColor: ['#ffffff', '#ffffff'], 
      borderWidth: 2,
    },
  ],
};

export const chartDataWide = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Active Service Provider',
      data: [1500, 3000, 1000, 4000, 2000, 3500, 1800], 
      borderColor: '#FF5733', 
      backgroundColor: 'rgba(255, 87, 51, 0.2)', 
      fill: false,
    },
    {
      label: 'Service Provider Retention Rate',
      data: [800, 2500, 900, 2300, 600, 1800, 1000], 
      borderColor: '#33FF57', 
      backgroundColor: 'rgba(51, 255, 87, 0.2)', 
      fill: false,
    },
    {
      label: 'New Service Provider',
      data: [700, 1200, 300, 2500, 1000, 1500, 600], 
      borderColor: '#3357FF', 
      backgroundColor: 'rgba(51, 87, 255, 0.2)', 
      fill: false,
    },
    {
      label: 'Service Completion Rate',
      data: [2000, 4000, 1500, 3800, 1800, 3500, 1600], 
      borderColor: '#F1C40F', 
      backgroundColor: 'rgba(241, 196, 15, 0.2)', 
      fill: false,
    },
    {
      label: 'Total Service Provider',
      data: [3500, 2000, 3800, 2500, 4100, 3000, 4000], 
      borderColor: '#E74C3C', 
      backgroundColor: 'rgba(231, 76, 60, 0.2)', 
      fill: false,
    },
    {
      label: 'Average Rating',
      data: [3.5, 4.5, 3.2, 4.8, 3.9, 4.3, 4.1], 
      borderColor: '#8E44AD', 
      backgroundColor: 'rgba(142, 68, 173, 0.2)', 
      fill: false,
    }
  ]
};

export const chartDataCircle = {
  labels: ['HealthCare Sector', 'Construction Sector', 'Home Services Sector', ' Petcare Sector', 'Entertainment Sector', 'Event Sector'],
  datasets: [
    {
      label: 'Segments',
      data: [15, 25, 20, 10, 5, 25], 
      backgroundColor: [
        'rgba(255, 132, 124, 1)', 
        'rgba(22, 93, 201, 1)',   
        'rgba(67, 198, 191, 1)',  
        'rgba(114, 35, 145, 1)',  
        'rgba(217, 139, 207, 1)', 
        'rgba(255, 212, 97, 1)'   
      ],
      borderColor: [
        'rgba(255, 132, 124, 1)', 
        'rgba(22, 93, 201, 1)',   
        'rgba(67, 198, 191, 1)',  
        'rgba(114, 35, 145, 1)',  
        'rgba(217, 139, 207, 1)', 
        'rgba(255, 212, 97, 1)'   
      ],
      borderWidth: 2,
    }
  ],
};

export const chartDataServiceOfferingPie = {
  labels: ['Active Service', 'Service Added', 'Service Removed'],
  datasets: [
    {
      data: [70, 20, 10],
      backgroundColor: ['#4CAF50', '#FFC107', '#F44336'], 
      borderWidth: 0, 
    },
  ],
};
export const chartDataServiceOfferingLine = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
  datasets: [
    {
      label: 'Active Service',
      data: [70, 80, 90, 70, 85, 95, 100, 90, 85, 75, 80, 70], 
      borderColor: '#4CAF50', 
      backgroundColor: 'rgba(76, 175, 80, 0.5)', 
      fill: true, 
      tension: 0.4, 
      borderWidth: 2, 
    },
    {
      label: 'Service Added',
      data: [50, 60, 70, 65, 70, 75, 80, 85, 90, 80, 75, 60], 
      borderColor: '#FF5722', 
      backgroundColor: 'rgba(255, 87, 34, 0.5)', 
      fill: true, 
      tension: 0.4, 
      borderWidth: 2, 
    },
    {
      label: 'Service Removed',
      data: [30, 20, 10, 15, 20, 25, 30, 35, 30, 25, 20, 15], 
      borderColor: '#2196F3', 
      backgroundColor: 'rgba(33, 150, 243, 0.5)', 
      fill: true, 
      tension: 0.4, 
      borderWidth: 2, 
    },
  ],
};

export const chartDataArc = {
  labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
  datasets: [
    {
      data: [25, 35, 20, 20], 
      backgroundColor: [
        '#FF6384', 
        '#36A2EB', 
        '#FFCE56', 
        '#4BC0C0', 
      ],
      borderColor: '#FFFFFF', 
      borderWidth: 2, 
    },
  ],
};

export const chartOptionsServiceProviderDonut = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      enabled: true,
    },
    datalabels: {
      display: false, 
    },
  },
};

export const chartOptionsArc = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '50%', 
  rotation: 0, 
  circumference: 360, 
  elements: {
    arc: {
      borderWidth: 2, 
      borderRadius: 5, 
    },
  },
  plugins: {
    legend: {
      display: true, 
      position: 'bottom',
    },
    tooltip: {
      enabled: true, 
    },
  },
};

export const otherChartOptions = chartOptionsWithLabels;