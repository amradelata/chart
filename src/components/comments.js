import React, { Component } from 'react';
import axios from 'axios';


class comments extends Component {

state = {
    comments:[],
    // comments:null
};


async componentDidMount (){
    let id = this.props.match.params.post_id
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    this.setState({comments: res.data})
    console.log(this.state.comments)
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

{this.state.comments.map(comment =>

<tr key={comment.id}>

  <th scope="row">{comment.id}</th>
  <th scope="row">{comment.body}</th>



</tr>
)  }

</tbody>
</table>
     );
  }
}

export default comments;