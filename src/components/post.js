
import React, { Component } from 'react';
import axios from 'axios';
import {
BrowserRouter as Router,
Route,
Link
} from "react-router-dom";

import comments from '../components/comments';

class post extends Component {

state = {
    posts:[],
};


async componentDidMount (){
    let id = this.props.match.params.post_id
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    this.setState({posts: res.data})
    console.log(this.state.posts)

}
  render() {


    return ( 
<div>

  <h1>comments</h1>
    <Router>
        <Route path="/:post_id" exact component={comments}/>
    </Router>
  <h1>posts from user {this.props.match.params.post_id}</h1>
            
    <table className="table table-bordered table-dark">
    <thead>
    <tr>
    <th scope="col">title</th>
    <th scope="col">post</th>
    </tr>
    </thead>
    <tbody>
    
    {this.state.posts.map(post =>
    
    <tr key={post.id}>
    
      <th scope="row"><Link to={'/'+ post.userId}>{post.title}</Link></th>
      <th scope="row"><Link to={'/'+ post.userId}>{post.body  }</Link></th>
    
    </tr>
    )  }
    
    </tbody>
    </table>
</div>
     );
  }
}

export default post;