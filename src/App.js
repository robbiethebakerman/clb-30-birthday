import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Kitten from "./pages/kitten";
import RobbieCompliments from "./pages/robbieCompliments";
import Message from "./pages/message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/robbieCompliments"
                component={RobbieCompliments}
              />
              <Route exact path="/kitten" component={Kitten} />
              <Route exact path="/message" component={Message} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
