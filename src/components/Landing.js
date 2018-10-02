import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as withRouter } from "react-router-dom";
import EmployerForm from './EmployerForm';


class Landing extends Component {
  render()
  {
    return(
      <div className="App">
        <header className="App-header">
          <img src={require('../images/testlogo.png')} className="App-logo" />
          <p className="App-title">
            Time from now on won't be wasted. <br></br>
            Place your candidate's email and let use prove their credibility.
          </p>
        </header>
        <p className="App-second-column">
          Information about what we provide
        </p>
        <p className="App-intro" >
      Report Mock Assesment          </p>

      <p><EmployerForm/></p>

        {/* <Button>
          Send
        </Button> */}
      </div>

    )
  }

}
export default Landing;
