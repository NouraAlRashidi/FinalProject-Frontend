  import React, { Component } from 'react';

  //Components
  import Landing from '../src/components/Landing';

// Router
import {Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'


  class App extends Component {
    render() {
      return (
        <div>
          <Route exact path="/" component={Landing} />

      </div>
      );
    }
  }

  export default App;
