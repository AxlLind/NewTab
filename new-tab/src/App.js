import React, { Component } from 'react';
import Calender from './components/Calender.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>NewTab</h1>
        </header>
        <Calender/>
      </div>
    );
  }
}

export default App;
