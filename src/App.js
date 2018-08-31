import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      avengers: ['Iron-man', 'Black Wido', 'Thor', 'Hulk']
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by Marshall</h1>
        </header>
        <div>Avengers: {this.state.avengers.map((avenger) => <div>{avenger}</div>)}</div>
      </div>
    );
  }
}

export default App;
