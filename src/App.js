import React, { Component } from 'react';
import Calendar from './components/Calendar.js';
import Clock from './components/Clock.js';
import Weather from './components/Weather.js';
import './css/App.css';

const App = () => (
    <div className='App'>
        <div className='TimeWeather'>
            <Clock/>
            <Weather/>
        </div>
        <Calendar/>
    </div>
);

export default App;
