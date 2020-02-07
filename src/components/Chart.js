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
    this.processData = this.processData.bind(this);
  };


  handleChange(e) {
    this.setState({value: e.target.value});
  }

   processData(e) {
      //  alert('your data is: ' + this.state.value);
      e.preventDefault();
      var record_num = 1;  // or however many elements there are in each row
      var allTextLines = this.state.value.split(/\r\n|\n/);
      var entries = allTextLines[0].split(',');
      var lines = [];

      var headings = entries.splice(0,record_num);
      while (entries.length>0) {
          var tarr = [];
          for (var j=0; j<record_num; j++) {
              tarr.push(headings[j]+":"+entries.shift());
          }
          lines.push(tarr);
      }
      console.log(lines);
  }

  

  render() {
    return ( 

        <div className="Chart">
          <form onSubmit={this.processData}>
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