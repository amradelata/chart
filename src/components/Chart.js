import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


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
      
      value: 'Please write the data.' ,
      lines : []

    };
    this.handleChange = this.handleChange.bind(this);
    this.processData = this.processData.bind(this);
  };


  handleChange(e) {
    this.setState({value: e.target.value});
  }

   processData(e) {
      // alert('your data is: ' + this.state.value);
      e.preventDefault();
      let record_num = 3;  
      let allTextLines = this.state.value.split(" ");
      this.state.lines.push(allTextLines) 
      console.log(this.state.lines)
  }

  

  render() {
    return ( 

        <div className="Chart">
          <form onSubmit={this.processData}>
            <textarea value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
            <ul>
            <li>{this.state.lines}</li>
            </ul>
            {/* <select ref="myid" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select> */}
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