import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const percentagePlugin = {
  id: 'percentagePlugin',
  afterDatasetsDraw(chart, args, options) {
    const { ctx, chartArea, data } = chart;

    if (!chartArea || !data || !data.datasets[0]) return;

    const dataset = data.datasets[0];
    const total = dataset.data.reduce((a, b) => a + b, 0);

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 16px Arial'; 

    dataset.data.forEach((value, index) => {
      const meta = chart.getDatasetMeta(0);
      const arc = meta.data[index];

      if (!arc) return;

      const { x, y, innerRadius, outerRadius, startAngle, endAngle } = arc;
      const midAngle = (startAngle + endAngle) / 2;
      const radius = (outerRadius + innerRadius) / 2;

      const arcCenterX = x + (radius + 20) * Math.cos(midAngle);
      const arcCenterY = y + (radius + 20) * Math.sin(midAngle);

      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, 20, 0, 2 * Math.PI); 
      ctx.fillStyle = 'white'; 
      ctx.fill();

      ctx.fillStyle = '#000'; 
      ctx.fillText(Math.round((value / total) * 100) + '%', arcCenterX, arcCenterY); 

      ctx.restore();
    });
  }
};

export default percentagePlugin;