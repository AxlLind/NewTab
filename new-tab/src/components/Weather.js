import React, { Component } from 'react';
import config from '../config.js';
import '../css/Weather.css';

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: 0
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
            id: config.WEATHER_CITY_ID,
            APPID: config.WEATHER_API_KEY,
            units: 'metric',
        });
        fetch(`http://api.openweathermap.org/data/2.5/weather/${parameters}`)
            .then(res => res.json())
            .then(res => this.setState({
                temp: Math.round(res.main.temp),
            }))
            .catch(error => console.log(error))
    }

    render() {
        return ( <div className='Weather'> {this.state.temp + '°'} </div> );
    }
}

export default Weather;
