import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props){
    super(props);
    this.textInputOne = React.createRef();
    this.textInputTow = React.createRef();
    this.textInputThree = React.createRef();
    this.state = {
      chartData: {
        labels: ['1-1-2019' ,'1-1-2019'],
        datasets:[
          {
            label: 'My Chart',
            data: [
              0
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
      let option = document.createElement('option');
      let node = document.createTextNode(this.state.maenArray[0][1].date);
      option.appendChild(node);
      let element = this.textInputOne.current
      element.appendChild(option);
      // 
      let optionTow = document.createElement('option');
      let nodeTow = document.createTextNode(this.state.maenArray[0][2].amount);
      optionTow.appendChild(nodeTow);
      let elementTow = this.textInputTow.current
      elementTow.appendChild(optionTow);
      // 
      let optionThree = document.createElement('option');
      let nodeThree = document.createTextNode(this.state.maenArray[0][3].spent);
      optionThree.appendChild(nodeThree);
      let elementThree = this.textInputThree.current
      elementThree.appendChild(optionThree);
      this.state.chartData.datasets[0].data[0] = this.state.maenArray[0][1].date
      console.log(this.state.chartData.datasets[0].data[0] )
  }


  render() {
    return ( 

        <div className="Chart">
          <form onSubmit={this.processData}>
            <textarea value={this.state.value} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
            


             <select ref={this.textInputOne}>
 
            </select>

             <select ref={this.textInputTow}>
 
            </select>
             <select ref={this.textInputThree}>
 
            </select>
         
          </form>



              <Line
              data={this.state.chartData}
              redraw 
              options={{}}
            />
        </div>
      );
  }
}

export default Chart;