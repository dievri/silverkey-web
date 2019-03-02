import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import About from "./components/About";
import Home from "./components/Home";
import CreateSpace from "./components/Spaces/CreateSpace";
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
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
