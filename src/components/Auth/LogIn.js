import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import API from "../../config/api";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      exists: null
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.props.handleLogin(e);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username, this.state.password);

    try {
      const response = await API.post("api/v1/login", {
        username: this.state.username,
        password: this.state.password
      });
      console.log(response.data);
      if (response.data.success === true) {
        console.log("success");
        this.handleLogin(this.state.username);
      } else if (response.data.exists === false) {
        console.log("User not exists");
        this.setState({
          exists: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/" />
    ) : (
      <div className="container mt-5">
        <form
          className="border border-info rounded signup p-2 mx-auto my-auto"
          onSubmit={e => this.handleSubmit(e)}
        >
          <h3 className="text-center">Log In</h3>
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
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-info btn-block">
            Log In
          </button>
          {this.state.exists === false ? (
            <div className="alert alert-danger my-3" role="alert">
              User not exists
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

export default LogIn;
