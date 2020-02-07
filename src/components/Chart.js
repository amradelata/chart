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
      },
      
      value: 'Please write the data.'        
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('your data is: ' + this.state.value);
    e.preventDefault();
  }

  

  render() {
    return ( 

        <div className="Chart">
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
            <Line
              data={this.state.chartData}
            
              options={{}}
            />
        </div>
      );
  }
}

export default Chart;