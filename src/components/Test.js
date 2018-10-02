import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as withRouter } from "react-router-dom";
import {observer} from "mobx-react";
import CandidateStore from "../stores/candidateStore";
import TestStore from "../stores/testStore";




class Test extends Component {

  render(){
    TestStore.getQuestions();
    console.log(TestStore.questions)
  //   console.log(TestStore.questions);
  // let listItems = TestStore.questions.map((question) =>
  //   <li>{question.question}</li>)

    return (
    <div>
       {/* <ul>{listItems}</ul> */}
</div>

)

    // return(
    //   <div className="App">
    //       {/* <p className="App-title">
    //
    //       </p> */}
    //
    //
    //
    //   </div>
    //
    // )
  }

}
export default Test;
