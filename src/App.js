import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import post from './components/post'

import {
BrowserRouter as Router,
Route,
Link
} from "react-router-dom";


class App extends Component {
state = {
users:[]
};


async componentDidMount (){
const res = await axios.get('https://jsonplaceholder.typicode.com/users')
this.setState({users: res.data})
// console.log(this.state.users)


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




    <Route path="/:post_id" exact component={post}/>





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

  <th scope="row"> <Link to={'/'+ user.id}>{user.id}</Link></th>
  <th scope="row"> <Link to={'/'+ user.id}>{user.name}</Link></th>


</tr>
)  }

</tbody>
</table>


</Router>
);
}
}

export default App;
