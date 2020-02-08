import React, { Component } from "react";
import axios from "axios";
import {
BrowserRouter as Router,
Route,
Link
} from "react-router-dom";

class home extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: res.data });
    console.log(this.state.users)
  }
  render() {
    return (
      <div>
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <th scope="row">
                  {" "}
                  <Link to={"/posts/" + user.id}>{user.id}</Link>
                </th>
                <th scope="row">
                  {" "}
                  <Link to={"/posts/" + user.id}>{user.name}</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default home;