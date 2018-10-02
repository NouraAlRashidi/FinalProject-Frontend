  import React, { Component } from 'react';


  //Components
  import Landing from '../src/components/Landing';
  import EmployerForm from '../src/components/EmployerForm';
  import ThankYou from '../src/components/ThankYou';
  import Instructions from '../src/components/Instructions';
  import NotFound from '../src/components/NotFound';
  import Test from '../src/components/Test';



// Router
import {Route } from "react-router-dom";


  class App extends Component {
    render() {
      return (
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Submit" component={EmployerForm} />
          <Route exact path = "/instructions/:token" component = {Instructions}/>
          <Route exact path = "/test"  component = {Test}/>

          <Route exact path="/thankyou" component={ThankYou} />
          <Route component={NotFound} />

      </div>
      );
    }
  }

  export default App;
