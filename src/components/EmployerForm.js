import React, { Component } from "react";
import "../App.css";
import {BrowserRouter as Route, withRouter, Redirect} from "react-router-dom";
import {observer} from "mobx-react";



import CandidateStore from "../stores/candidateStore";


class EmployerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      candidateEmail: "",
      companyEmail: "",
      companyName: "",
      // redirect: false,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
   this.setState({[event.target.name]: event.target.value});
 }

  handleSubmit(event) {
    event.preventDefault();
    alert('The candidate '+ this.state.candidateEmail+ ' you have submitted has been sent an email to complete the assessment ' );
    CandidateStore.submitcandidatemail(this.state);
    // this.setState({redirect: true});
      }
  //
  // navigate(){
  //
  //     <Redirect to = '/thankyou' />
  //
  //
  // }

  render() {

    // if (this.redirect)
    // {
    //   <Route>
    //   <Redirect to = '/thankyou' />
    // </Route>
    // }

    return (
      <form onSubmit = {this.handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Candidate's Email</label>
    <input
      type="text"
      className = "form-control"
      name = "candidateEmail"
      placeholder="Email"
      // onChange={e => (CandidateStore.candidateEmail = e.target.value)}
      onChange = {this.handleChange}
/>
    {/* <small
      id="emailHelp"
      class="form-text text-muted">
      We'll never share your email with anyone else.
    </small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Company's Email</label>
    <input
      type="text"
      className = "form-control"
      name = "companyEmail"
      placeholder="Email"
      onChange = {this.handleChange}
      />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Company's Name</label>

    <input
      type="text"
      className = "form-control"
      name = "companyName"
      onChange = {this.handleChange}/>
    {/* <label class="form-group" for="exampleCheck1">
      Company's Name</label> */}
  </div>
  <button
    type="submit"
    value="Submit"
    class="btn btn-primary"

    >
  Submit</button>

</form>




      // <div className="App-third-column">
      //   {/* <form onSubmit={()=>CandidateStore.submitcandidatemail()}> */}
      //   <form onSubmit = {this.handleSubmit}>
      //
      //       <input
      //         type="text"
      //         className = "form-control"
      //         name = "candidateEmail"
      //         // onChange={e => (CandidateStore.candidateEmail = e.target.value)}
      //         onChange = {this.handleChange}
      //
      //       />
      //     <br />
      //     <br />
      //
      //       <input
      //         type="text"
      //         className = "form-control"
      //         name = "companyEmail"
      //         onChange = {this.handleChange}
      //
      //         // onChange={e => (CandidateStore.companyEmail = e.target.value)}
      //       />
      //     <br />
      //     <br />
      //
      //       <input
      //         type="text"
      //         className = "form-control"
      //         name = "companyName"
      //         onChange = {this.handleChange}
      //         // onChange={e => (CandidateStore.companyName = e.target.value)}
      //       />
      //     <br />
      //     <br />
      //     {/* <Link
      //       to= "/thankyou"
      //       component = {Button}
      //       > Send Email</Link> */}
          //   <input type="submit" value="Submit"  />
          // <br />
      //   </form>
      // </div>
    );
  }
}
export default observer(EmployerForm);
