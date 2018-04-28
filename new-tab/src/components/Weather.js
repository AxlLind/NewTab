import React, { Component } from 'react';
import config from '../config.js';
import '../css/Weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: 0,
            icon: '10d',
        }
    }

    /* See url for icon mapping: openweathermap.org/weather-conditions */
    weatherIcon(iconName) {
        const night = (iconName[2] === 'n' ? 'night-' : '');
        switch(iconName.substr(0,2)) {
            case '01': return require(`../weathericons/${night}sun.png`);
            case '02': return require(`../weathericons/${night}sunny-cloud.png`);
            case '10': return require(`../weathericons/${night}sunny-rain.png`);
            case '03': return require('../weathericons/cloud.png');
            case '04': return require('../weathericons/cloud.png');
            case '09': return require('../weathericons/rain.png');
            case '11': return require('../weathericons/thunder.png');
            case '13': return require('../weathericons/snow.png');
            case '50': return require('../weathericons/mist.png');
            default: // should never get here
                return require('../weathericons/sun.png');
        }
    }

    postParameters(o) {
        let s = '?';
        for (let attr in o)
            s += `${attr}=${o[attr]}&`;
        return s.slice(0, -1); // remove last '&'
    }

    componentDidMount() {
        let parameters = this.postParameters({
            APPID: config.WEATHER_API_KEY,
            id: config.WEATHER_CITY_ID,
            units: 'metric',
        });
        fetch(`http://api.openweathermap.org/data/2.5/weather/${parameters}`)
            .then(res => res.json())
            .then(res => this.setState({
                temp: Math.round(res.main.temp),
                icon: res.weather[0].icon,
            }))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='Weather'>
                <div className='WeatherIcon'>
                    <img className='WeatherImage' src={this.weatherIcon(this.state.icon)} alt=''/>
                </div>
                <div className='WeatherTemp'>{this.state.temp + '°'}</div>
            </div>
        );
    }
}

export default Weather;
