import React, { useEffect, useRef } from 'react';
import './CardContent.css'

const ArcChart = ({ percentages, colors, labels }) => {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const canvasRef3 = useRef(null);

  const drawArc = (canvas, percentage, color, lineWidth) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const radius = (canvas.width / 2) - lineWidth;
    const startAngle = -0.5 * Math.PI; 
    const endAngle = startAngle + (2 * Math.PI * (percentage / 100)); 

    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, endAngle, false);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round'; 
    ctx.stroke();
  };

  useEffect(() => {
    drawArc(canvasRef1.current, percentages[0], colors[0], 20); 
    drawArc(canvasRef2.current, percentages[1], colors[1], 20); 
    drawArc(canvasRef3.current, percentages[2], colors[2], 20); 
  }, [percentages, colors]);

  return (
    <div className="arc-chart-wrapper">
      <div className="arc-labels">
        <div className="arc-label">
          <h4>{labels[0]}</h4>
          <span>{percentages[0]}%</span>
        </div>
        <div className="arc-label">
          <h4>{labels[1]}</h4>
          <span>{percentages[1]}%</span>
        </div>
        <div className="arc-label">
          <h4>{labels[2]}</h4>
          <span>{percentages[2]}%</span>
        </div>
      </div>
      <div className="arc-chart-container">
        <canvas ref={canvasRef1} width="300" height="300" className="arc-chart" />
        <canvas ref={canvasRef2} width="260" height="260" className="arc-chart arc-middle" />
        <canvas ref={canvasRef3} width="220" height="220" className="arc-chart arc-inner" />
      </div>
    </div>
  );
};

export default ArcChart;