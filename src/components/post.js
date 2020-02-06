import React, { Component } from 'react';
import axios from 'axios';

class post extends Component {
state = {
    posts:[],
    // posts:null
};
async componentDidMount (){
    let id = this.props.match.params.post_id
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + 10)
    this.setState({posts: res.data})
    console.log(this.state.posts)

}
  render () {
  return(
    <h1>router prames</h1>
  )
}
}
export default post;
