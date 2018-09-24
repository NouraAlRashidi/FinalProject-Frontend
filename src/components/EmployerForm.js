import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import CandidateStore from "../stores/candidateStore";
import EmployerStore from "../stores/employerStore";



class EmployerForm extends Component {
  render()
  {
    return(
    <div className="App-third-column">

      <form >
      <label>
      Candidate Email:
      <input type="text" value={CandidateStore.setEmail(this.state.value)} />
      </label>
      <br></br>
      <br></br>
      <label>
      Company Email:
      <input type="text" value={EmployerStore.setEmail(this.state.value)} />
      </label>
      <br></br>
      <br></br>
      <label>
      Company Name:
      <input type="text" value={EmployerStore.setCompany(this.state.value)}/>
      </label>
      <br></br>
      <br></br>

      <input type="submit" value="Submit" />
      <br></br>

      </form>

</div>
    )
  }

}
export default withRouter(EmployerForm);
