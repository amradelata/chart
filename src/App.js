import React, {Component} from 'react';
import './App.css';
import User from './components/User'
import User1 from './components/User1'
import axios from 'axios';

import {
BrowserRouter as Router,
Route,
Link,
Redirect
} from "react-router-dom";


// const Net = ({match})=>{
// return(<h1>hi hi hi hi{match.params.userid}</h1>)
// }
class App extends Component {
state = {
users:[]
};


async componentDidMount (){
const res = await axios.get('https://jsonplaceholder.typicode.com/users')
this.setState({users: res.data})
console.log(this.state.users)
}
render() {
return ( 

<Router>
<div className="app">


  {/* link */}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

    </ul>

<Route path="/" exact render={
  ()=>{
    return(
      <h1>hi in your home</h1>
    )
  }
}/>


<Route path="/User1" exact component={User1}/>



</div>



<table className="table table-bordered table-dark">

<thead>
<tr>
<th scope="col">userId</th>
<th scope="col">name</th>
</tr>
</thead>
<tbody>

{this.state.users.map(user =>

<tr key={user.id}>

  <th scope="row"><Link to="/User1/:userid">{user.id}</Link></th>
  <th scope="row"><Link to="/Net" exact="true">{user.name}</Link></th>



</tr>
)  }

</tbody>
</table>

  <Route path="/User1/:userid" exact strict component={User1}/>

</Router>
);
}
}

export default App;
