import React, { Component } from 'react';
import axios from 'axios';

class post extends Component {
state = {
    posts:[],
    // posts:null
};
async componentDidMount (){
    let id = this.props.match.params.post_id
    console.log(id)
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)
    this.setState({posts: res.data})
    

}
  render () {
  return(
<div>
      <h1>router prames</h1>
  <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col"> Id</th>
                <th scope="col">posts</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map(post => (
                <tr key={post.id}>
                  <th scope="row">
                    {" "}
                    {post.id}
                  </th>
                  <th scope="row">
                    {" "}
                    {post.body}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
</div>
  )
}
}
export default post;
