import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import About from "./components/About";
import Home from "./components/Home";
import CreateSpace from "./components/Spaces/CreateSpace";
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/download" component={Download} />
            <Route path="/about" component={About} />
            <Route path="/create" component={CreateSpace} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
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
