import React, {Component} from 'react';
import axios from 'axios';


class User1 extends Component {
state = {
    loding: true,
    posts:[]
};


async componentDidMount (){
    const {match : {params}} = this.props;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.userid}`)
    this.setState({posts: res.data})
    console.log(this.state.posts)
}

  render() {
    return ( 


<table className="table table-bordered table-dark">

  <thead>
    <tr>

      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>

{this.state.posts.map(post =>
        <tr key={post.id}>
    
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    )  }

  </tbody>
</table>
     );
  }
}

export default User1;