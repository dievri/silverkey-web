import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import About from "./components/About";
import Home from "./components/Home";
import CreateSpace from "./components/Spaces/CreateSpace";
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import { connect } from "react-redux";
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.setState({
      loggedIn: true,
      username: e
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar loggedIn={this.state.loggedIn} />
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
