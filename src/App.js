import React, { Component } from "react";
mport { Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Landing from '../src/components/Landing';
import EmployerForm from '../src/components/EmployerForm';
import ThankYou from '../src/components/ThankYou';
import Instructions from '../src/components/Instructions';
import NotFound from '../src/components/NotFound';
import Test from '../src/components/Test';


class App extends Component {
  render() {
    return (
      <div>
        <Case>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Submit" component={EmployerForm} />
          <Route exact path = "/instructions/:token" component = {Instructions}/>
          <Route exact path = "/test"  component = {Test}/>

          <Route exact path="/thankyou" component={ThankYou} />
          <Route component={NotFound} />
        </Case>

      </div>
    );
  }
}

export default App;
