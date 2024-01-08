import React from 'react';
import ReactApexChart from 'react-apexcharts';
import'./Chart1.css';
// line graphhhhh...........................................................................................................//
class CustomBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-line'
        },
        xaxis: {
  
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May','jun','july','Aug','Sept','Oct','Nov','Dec'],
          title: {
            text: 'Months',
          },
        },
      },
      series: [
        {
          name: 'Sales',
          data: [45, 4, 45, 50, 49,36,84,56,25,67,12,16],
          title: {
            text: 'Months',
          },
        },
      ],
    };
  }

  render() {
    return (
      <div >
        <div className="bar-chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height="350"
          width="650"
        />

        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="350"
          width="650"
          className="space"
        />
        </div>

        <div className='bar-chart'>
            <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="350"
            width="650"
            />
            <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="350"
            width="650"
            /> 
        </div>
      </div>
    );
  }
}

export default CustomBarChart;






