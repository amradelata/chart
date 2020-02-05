import React, {Component} from 'react';


import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class User extends Component {


state = {
    loding: true,
    posts:[]
};


async componentDidMount (){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({posts: data})
    console.log(this.state.posts)
}

  render() {
    return ( 
<div>






<h1>hi from User page</h1>


<table className="table table-bordered table-dark">

  <thead>
    <tr>
      <th scope="col">userId</th>
       {/* <th scope="col">id</th> */}
      <th scope="col">title</th>
      {/* <th scope="col">body</th> */}
    </tr>
  </thead>
  <tbody>

{this.state.posts.map(post =>
        <tr key={post.id}>
            <th scope="row">{post.userId}</th>
            {/* <td>{post.id}</td> */}
            <td>{post.title}</td>
            {/* <td>{post.body}</td> */}

        </tr>
    )  }

  </tbody>
</table>




        </div>
     );
  }
}

export default User;