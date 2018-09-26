import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import CandidateStore from "../stores/candidateStore";

class EmployerForm extends Component {
  render() {
    return (
      <div className="App-third-column">
        <form onSubmit={e => CandidateStore.submitcandidatemail(e)}>
          <label>
            Candidate Email:
            <input
              type="text"
              onChange={e => (CandidateStore.candidateEmail = e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Company Email:
            <input
              type="text"
              onChange={e => (CandidateStore.companyEmail = e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Company Name:
            <input
              type="text"
              onChange={e => (CandidateStore.companyName = e.target.value)}
            />
          </label>
          <br />
          <br />

          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}
export default withRouter(EmployerForm);
