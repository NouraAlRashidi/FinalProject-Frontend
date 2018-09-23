  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React.     Information about what we provide</h1>
          </header>
          <p className="App-intro">
            Information about what we provide
          </p>
          <p className="App-intro">
Report Mock Assesment          </p>

            <form style={{height: 100, backgroundColor: 'steelblue'}}>
      <label>
        Candidate Email:
        <input type="text" name="name" />
      </label>
<br></br>
<br></br>
      <label>
        Company Email:
        <input type="text" name="name" />
      </label>
      <br></br>
      <br></br>
      <label>
        Company Name:
        <input type="text" name="name" />
      </label>
      <br></br>
      <br></br>

      <input type="submit" value="Submit" />
      <br></br>

    </form>

          {/* <Button>
            Send
          </Button> */}
        </div>
      );
    }
  }

  export default App;
