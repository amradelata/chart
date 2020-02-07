import React, { Component } from 'react';
import Chart from './Chart'
import posts from './posts'
import post from './post'
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
    <Route exact  path="/posts/:post_id" component={post}/>
    <Route exact  path="/" component={Chart}/>
  </Router>
</div>


     );
  }
}

export default Nav;