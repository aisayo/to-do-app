import React, { Component } from 'react';
import './App.css';
import Tasks from './components/tasks/tasks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Aysan To-do</h1>
        </header>
        <Tasks />
      </div>
    );
  }
}

export default App;
