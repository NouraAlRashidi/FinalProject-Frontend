  import React, { Component } from 'react';

  //Components
  import Landing from '../src/components/Landing';
  import EmployerForm from '../src/components/EmployerForm';
  import ThankYou from '../src/components/ThankYou';


// Router
import {Route } from "react-router-dom";


  class App extends Component {
    render() {
      return (
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Submit" component={EmployerForm} />
          <Route exact path="/thankyou" component={ThankYou} />


      </div>
      );
    }
  }

  export default App;
