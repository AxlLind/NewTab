import React, { Component } from 'react';
import '../css/Weather.css';
import config from '../config.js';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: 0
        }
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${config.WEATHER_CITY_ID}&units=metric&APPID=${config.WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(res => this.setState({
                temp: Math.round(res.main.temp),
            }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='Weather'>
                {this.state.temp + '°'}
            </div>
        );
    }
}

export default Weather;
