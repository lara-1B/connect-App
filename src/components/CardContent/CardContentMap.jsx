import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import mapChartConfig from '../../config/mapChart.config'; 
import './CardContent.css'; 

const CardContentMap = ({ headerText, mapData }) => {

  const chartOptions = {
    ...mapChartConfig,
    series: [
      {
        ...mapChartConfig.series[0],
        data: mapData, 
      },
    ],
  };

  return (
    <div className="card-content-half">
      <div className="header">
        {headerText}
      </div>
      <div className="content-container">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="mapChart"
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default CardContentMap;