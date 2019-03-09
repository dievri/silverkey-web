import React, { Component } from "react";
import API from "../../config/api";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      status: null,
      exists: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username, this.state.email, this.state.password);

    try {
      const response = await API.post("api/v1/user", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      });
      console.log(response.data);
      if (response.data.status === true) {
        console.log("success");
        this.setState({
          username: "",
          email: "",
          password: "",
          status: true
        });
      } else if (response.data.exists === true) {
        console.log("already exists");
        this.setState({
          username: "",
          email: "",
          password: "",
          exists: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const successAlert = (
      <div className="alert alert-success my-3" role="alert">
        User successfully created.
      </div>
    );

    const existsAlert = (
      <div className="alert alert-danger my-3" role="alert">
        User already exists
      </div>
    );
    return (
      <div className="container mt-5">
        <form
          className="border border-info rounded signup p-2 mx-auto my-auto"
          onSubmit={e => this.handleSubmit(e)}
        >
          <h3 className="text-center">Sign Up</h3>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </div>{" "}
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
          </div>{" "}
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-info btn-block">
            Sign Up
          </button>
          {this.state.status
            ? successAlert
            : this.state.exists
            ? existsAlert
            : null}
        </form>
      </div>
    );
  }
}

export default SignUp;
