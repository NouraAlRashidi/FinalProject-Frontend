import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as withRouter, Redirect } from "react-router-dom";
import {observer} from "mobx-react";
import TestStore from "../stores/testStore";
import AuthStore from "../stores/authStore";






class Instructions extends Component {
  componentDidMount () {
    console.log ("You are in component did mount");
    if (this.props.match.params.token)
    {
      const token = this.props.match.params.token;
      let x = AuthStore.authenticate(token);
            if (x ===0 )
                // <Redirect  from = '/instructions:token' to='/thankyou'/>
                this.props.history.push('/thankyou');
                // setAuthToken(token);
      console.log(token);
    }
}
  render()


  {
    console.log("You are in the instructions page")
    return(


      <div className="card">
        <div className = "card-header"> Featured </div>
        <div className = "card-body">
          <h5 className = "card-title"> Welcome </h5>
          <p className = "Card-text"> Dear Candidate,
          Welcome to Zebra Evaluations! You have been selected from among a highly talented pool of qualified
        candidates to parteake in a technical asssessment. The purpose of the evaluation is to asssess
      the core competencies required for employment as a developer.</p>

        <button>
          // {/* href = "/test"
          // className = "btn btn-primary" */}


        Start Assessment

      </button>
        </div>
      </div>

    )
  }

}
export default observer(Instructions) ;
