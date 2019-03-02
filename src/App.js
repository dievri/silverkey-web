import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Video from "./components/Video";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section>
          <Route exact path="/" component={Video} />
          <Route path="/download" component={Download} />
        </section>
      </div>
    );
  }
}

export default App;
