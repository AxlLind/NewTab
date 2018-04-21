import React, { Component } from 'react';
import Calendar from './components/Calendar.js';
import Clock from './components/Clock.js';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Calendar/>
                <Clock/>
            </div>
        );
    }
}

export default App;
