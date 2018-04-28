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
    weatherIcon(iconType) {
        let icon;
        const night = (iconType[2] === 'n' ? 'night-' : '');
        switch(iconType.slice(0, -1)) {
            case '01': icon = `${night}sun`;         break;
            case '02': icon = `${night}sunny-cloud`; break;
            case '10': icon = `${night}sunny-rain`;  break;
            case '03': icon = 'cloud';               break;
            case '04': icon = 'cloud';               break;
            case '09': icon = 'rain';                break;
            case '11': icon = 'thunder';             break;
            case '13': icon = 'snow';                break;
            case '50': icon = 'mist';                break;
            default: // should never get here
                icon = 'sun';
        }
        return require(`../weathericons/${icon}.png`);
    }

    postParameters(obj) {
        let s = '?';
        for (let attr in obj)
            s += `${attr}=${obj[attr]}&`;
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
            })).catch(error => console.log(error))
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
