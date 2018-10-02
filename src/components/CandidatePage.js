import React, { Component } from "react";
import testlogo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class CandidatePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("../images/testlogo.png")} className="App-logo" />
          <p className="Instructions">
            Congratulations on being selected for the program! <br />
          </p>
        </header>
        <p className="App-second-column">Information about what we provide</p>
        <p className="App-intro">Report Mock Assesment </p>

        <p>
          <EmployerForm />
        </p>

        {/* <Button>
          Send
        </Button> */}
      </div>
    );
  }
}
export default withRouter(CandidatePage);
