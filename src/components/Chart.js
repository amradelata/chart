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
      
      // value: 'Please write the data.' ,
      lines : [],
      maenArray: []

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
      let myArray = [
        {id :   Math.random().toString(36).substr(2, 9)},
        {date : allTextLines[0]},
        {amount : allTextLines[1]},
        {spent : allTextLines[2]},
      ]
      this.state.maenArray.push(myArray)
      console.log(this.state.maenArray)
  }


  render() {
    return ( 

        <div className="Chart">
          <form onSubmit={this.processData}>
            <textarea value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
   
            <select>
              { this.state.maenArray.map(item =>
              <div>
                  <option key={item.id}>{item.date}</option>
                  <option>{item.amount}</option>
                  <option>{item.spent}</option>
              </div>
                 
                 )}
            </select>
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