import React, { Component } from 'react';
import Calendar from './components/Calendar.js';
import Clock from './components/Clock.js';
import Weather from './components/Weather.js';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div className='BackgroundColor'>
                <div className='App'>
                    <div className='TimeWeather'>
                        <Clock/>
                        <Weather/>
                    </div>
                    <Calendar/>
                </div>
            </div>
        );
    }
}

export default App;
