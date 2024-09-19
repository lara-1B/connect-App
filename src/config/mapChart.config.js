import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import mapData from '../Maps/in-all.geo.json'; 

HighchartsMap(Highcharts);

const mapDataWithSectors = [
    { id: 'IN.AN', value: 1, color: '#FF8480' }, 
    { id: 'IN.AP', value: 2, color: '#165DC9' }, 
    { id: 'IN.AR', value: 3, color: '#43C6BF' }, 
    { id: 'IN.AS', value: 4, color: '#722394' }, 
    { id: 'IN.BR', value: 5, color: '#D98BCC' }, 
    { id: 'IN.CH', value: 1, color: '#FF8480' }, 
    { id: 'IN.CT', value: 2, color: '#165DC9' }, 
    { id: 'IN.DN', value: 3, color: '#43C6BF' }, 
    { id: 'IN.DD', value: 4, color: '#722394' }, 
    { id: 'IN.DL', value: 5, color: '#D98BCC' }, 
    { id: 'IN.GA', value: 1, color: '#FF8480' }, 
    { id: 'IN.GJ', value: 2, color: '#165DC9' }, 
    { id: 'IN.HR', value: 3, color: '#43C6BF' }, 
    { id: 'IN.HP', value: 4, color: '#722394' }, 
    { id: 'IN.JK', value: 5, color: '#D98BCC' }, 
    { id: 'IN.JH', value: 1, color: '#FF8480' }, 
    { id: 'IN.KA', value: 2, color: '#165DC9' }, 
    { id: 'IN.KL', value: 3, color: '#43C6BF' }, 
    { id: 'IN.LD', value: 4, color: '#722394' }, 
    { id: 'IN.LA', value: 5, color: '#D98BCC' }, 
    { id: 'IN.MP', value: 1, color: '#FF8480' }, 
    { id: 'IN.MH', value: 2, color: '#165DC9' }, 
    { id: 'IN.Manipur', value: 3, color: '#43C6BF' }, 
    { id: 'IN.Mizoram', value: 4, color: '#722394' }, 
    { id: 'IN.NG', value: 5, color: '#D98BCC' }, 
    { id: 'IN.OR', value: 1, color: '#FF8480' }, 
    { id: 'IN.PB', value: 2, color: '#165DC9' }, 
    { id: 'IN.RJ', value: 3, color: '#43C6BF' }, 
    { id: 'IN.SK', value: 4, color: '#722394' }, 
    { id: 'IN.TN', value: 5, color: '#D98BCC' }, 
    { id: 'IN.TG', value: 1, color: '#FF8480' }, 
    { id: 'IN.TR', value: 2, color: '#165DC9' }, 
    { id: 'IN.UT', value: 3, color: '#43C6BF' }, 
    { id: 'IN.UP', value: 4, color: '#722394' }, 
    { id: 'IN.WB', value: 5, color: '#D98BCC' }, 
  ];

  const mapChartConfig = {
    chart: {
      map: mapData, 
      height: '90%', 
    },
    title: {
      text: 'Indian States by Sector',
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },
    colorAxis: {
      dataClasses: [
        {
          from: 1,
          to: 1,
          color: '#FF8480', 
          name: 'HealthCare Sector',

        },
        {
          from: 2,
          to: 2,
          color: '#165DC9', 
          name: 'Construction Sector',
        },
        {
          from: 3,
          to: 3,
          color: '#43C6BF', 
          name: 'Home Services Sector',
        },
        {
          from: 4,
          to: 4,
          color: '#722394', 
          name: 'Petcare Sector',
        },
        {
          from: 5,
          to: 5,
          color: '#D98BCC', 
          name: 'Entertainment Sector',
        },
        {
          from: 6,
          to: 6,
          color: '#FFD461', 
          name: 'Event Sector',
        },
      ],
      labels: {
        format: '{value}', 
      },
    },
    series: [
      {
        data: mapDataWithSectors,
        mapData: mapData,
        joinBy: ['id', 'id'], 
        name: 'Sectors',
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}',
        },
      },
    ],
};

export default mapChartConfig;