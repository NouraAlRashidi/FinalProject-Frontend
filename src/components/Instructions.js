import React, { Component } from "react";
import testlogo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Instructions extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-third-column">


            PLease click on the link below to take your test! <br />

        <Button>
          <input
            type="submit"
            className="App-second-column"
            placeholder="Press here"
            <h3>{this.props.match.params.candidateID}</h3>
        </Button>


      </div>
    )
  }
}
export default withRouter(Instructions);
