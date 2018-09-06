import React, { Component } from 'react';
import fetch from 'fetch-everywhere';

class App extends Component {

  componentDidMount() {

    fetch('/api/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
