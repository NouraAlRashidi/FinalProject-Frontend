import React, { Component } from "react";
import "../App.css";
import {BrowserRouter as withRouter} from "react-router-dom";
import {observer} from "mobx-react";



import CandidateStore from "../stores/candidateStore";


class EmployerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      candidateEmail: "",
      companyEmail: "",
      companyName: "",

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
   this.setState({[event.target.name]: event.target.value});
 }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.companyName);
    CandidateStore.submitcandidatemail(this.state);
  }

  render() {
    return (
      <div className="App-third-column">
        {/* <form onSubmit={()=>CandidateStore.submitcandidatemail()}> */}
        <form onSubmit = {this.handleSubmit}>

            <input
              type="text"
              className = "form-control"
              name = "candidateEmail"
              // onChange={e => (CandidateStore.candidateEmail = e.target.value)}
              onChange = {this.handleChange}

            />
          <br />
          <br />

            <input
              type="text"
              className = "form-control"
              name = "companyEmail"
              onChange = {this.handleChange}

              // onChange={e => (CandidateStore.companyEmail = e.target.value)}
            />
          <br />
          <br />

            <input
              type="text"
              className = "form-control"
              name = "companyName"
              onChange = {this.handleChange}
              // onChange={e => (CandidateStore.companyName = e.target.value)}
            />
          <br />
          <br />
          {/* <Link
            to= "/thankyou"
            component = {Button}
            > Send Email</Link> */}
          <input type="submit" value="Submit"  />
          <br />
        </form>
      </div>
    );
  }
}
export default observer(EmployerForm);
