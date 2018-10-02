import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as withRouter } from "react-router-dom";
import {observer} from "mobx-react";



class NotFound extends Component {
  render()
  {
    return(
      <div className="App">

          <p className="App-title">
            You're URL is incorrect
          </p>


        {/* <Button>
          Send
        </Button> */}
      </div>

    )
  }

}
export default observer(NotFound);
