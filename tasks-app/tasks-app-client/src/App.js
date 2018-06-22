import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tasks from './components/tasks/tasks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Aysan To-do</h1>
        </header>
        <p className="App-intro">
          Just trying to bullshit something
        </p>
        <Tasks />
      </div>
    );
  }
}

export default App;
