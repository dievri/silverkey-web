import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import About from "./components/About";
import Home from "./components/Home";
import CreateSpace from "./components/Spaces/CreateSpace";
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import API from "./config/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    this.setState({
      loggedIn: true,
      username: e
    });
  }

  handleLogout() {
    const response = API.get("api/v1/logout").then(res => {
      console.log(res.data);
      if (res.data.loggedOut) {
        this.setState({
          loggedIn: false,
          username: ""
        });
      }
    });
  }

  componentDidMount() {
    const response = API.get("api/v1/getname").then(res => {
      console.log(res.data);
      if (res.data.username) {
        this.setState({
          loggedIn: true,
          username: res.data.username
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar
            loggedIn={this.state.loggedIn}
            handleLogout={this.handleLogout}
          />
        </header>
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/download" component={Download} />
            <Route path="/about" component={About} />
            <Route path="/create" component={CreateSpace} />
            <Route path="/signup" component={SignUp} />
            <Route
              path="/login"
              render={() => (
                <LogIn
                  handleLogin={this.handleLogin}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
          </Switch>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default App;
