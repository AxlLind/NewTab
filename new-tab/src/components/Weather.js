import React, { Component } from 'react';
import '../css/Weather.css';

const API_Key = 'b23c041249f8e1b699fe0e22560b992c';
const City_ID = '2673730'; // Stockholm
const weather_query = `http://api.openweathermap.org/data/2.5/weather?id=${City_ID}&units=metric&APPID=${API_Key}`;

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            temp: 0,
            item: "",
        }
    }

    componentDidMount() {
        fetch(weather_query)
            .then(res => res.json())
            .then(res => this.setState({ temp: Math.round(res.main.temp) }))
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
