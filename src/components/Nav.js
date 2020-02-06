import React, { Component } from 'react';
import chart from './chart'
import posts from './posts'
import {
BrowserRouter as Router,
Route,
Link
} from "react-router-dom";

class Nav extends Component {
  render() {
    return ( 

<div>



        
  <Router>








<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
    <Link to="/" className="nav-link">Chart</Link>

      </li>
      <li className="nav-item">
    <Link to="/posts" className="nav-link">Posts</Link>

      </li>

   
    </ul>
    

  </div>
</nav>








    <Route exact  path="/posts" component={posts}/>
    <Route exact  path="/" component={chart}/>
  </Router>
</div>


     );
  }
}

export default Nav;