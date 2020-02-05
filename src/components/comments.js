import React, { Component } from 'react';
import axios from 'axios';


class post extends Component {

state = {
    posts:[],
    // posts:null
};


async componentDidMount (){
    let id = this.props.match.params.post_id
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    this.setState({posts: res.data})
    console.log(this.state.posts)
}
  render() {


    return ( 
<table className="table table-bordered table-dark">

<thead>
<tr>
<th scope="col">userId</th>
<th scope="col">name</th>
</tr>
</thead>
<tbody>

{this.state.posts.map(post =>

<tr key={post.id}>

  <th scope="row">{post.id}</th>
  <th scope="row">{post.body}</th>



</tr>
)  }

</tbody>
</table>
     );
  }
}

export default post;