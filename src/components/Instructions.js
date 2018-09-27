import React, { Component } from "react";
import testlogo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import setAuthToken from "../components/utils";

class Instructions extends Component {
  componentDidMount() {
    if (this.props.match.params.token) {
      const token = this.props.match.params.token;
      setAuthToken(token);
      console.log(token);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-third-column">
          <h2> Please click to take your test! </h2>
        </header>
        <button>
          <input
            type="submit"
            className="App-second-column"
            placeholder="Press here"
          />
        </button>
      </div>
    );
  }
}
export default withRouter(Instructions);
