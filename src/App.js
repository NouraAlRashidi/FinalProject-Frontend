import React, { Component } from "react";

//Components
import Landing from "../src/components/Landing";
import Instructions from "../src/components/Instructions";

// Router
import { Route, Link, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/instructions/:token" component={Instructions} />
        </Switch>
      </div>
    );
  }
}

export default App;
