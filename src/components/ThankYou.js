import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as withRouter } from "react-router-dom";
import {observer} from "mobx-react";



class ThankYou extends Component {
  render()
  {
    return(
      <div className="App">

          <p className="App-title">
            Thank you
            You're candidate will now be sent an email to start the assessment
          </p>


        {/* <Button>
          Send
        </Button> */}
      </div>

    )
  }

}
export default observer(ThankYou);
