import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        labels: ['1-1-2019' ,'1-1-2019'],
        datasets:[
          {
            label: 'pouplathin',
            data: [
              100, 200
            ],
            backgroundColor:['red','red']
          }
        ]
      }
    }
  }

  render() {
    return ( 
        <div className="Chart">
            <Line
              data={this.state.chartData}
            
              options={{}}
            />
        </div>
      );
  }
}

export default Chart;