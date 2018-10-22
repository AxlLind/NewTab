import React, { PureComponent } from 'react';
import config from '../config.js';
import '../css/Weather.css';

class Weather extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      icon: '01d',
      city: 'N/A',
    }
    this.fetch_weather = this.fetch_weather.bind(this);
  }

  /* See url for icon mapping: https://openweathermap.org/weather-conditions */
  weatherIcon(iconType) {
    let icon = 'sun';
    const n = iconType[2] === 'n' ? '-night' : '';
    switch(iconType.slice(0, -1)) {
      case '01': icon = `sun${n}`;         break;
      case '02': icon = `sunny-cloud${n}`; break;
      case '10': icon = `sunny-rain${n}`;  break;
      case '03': icon = 'cloud';           break;
      case '04': icon = 'cloud';           break;
      case '09': icon = 'rain';            break;
      case '11': icon = 'thunder';         break;
      case '13': icon = 'snow';            break;
      case '50': icon = 'mist';            break;
    }
    return require(`../weathericons/${icon}.png`);
  }

  /* Converts a JS object into post parameters */
  postParameters(obj) {
    let s = '?';
    for (let attr in obj)
      s += `${attr}=${obj[attr]}&`;
    return s.slice(0, -1); // remove last '&'
  }

  fetch_weather() {
    const params = this.postParameters({
      APPID: config.WEATHER_API_KEY,
      id: config.WEATHER_CITY_ID,
      units: 'metric',
    });
    fetch(`http://api.openweathermap.org/data/2.5/weather/${params}`)
      .then(res => res.json())
      .then(({ main, weather, name }) => this.setState({
        temp: Math.round(main.temp),
        icon: weather[0].icon,
        city: name,
      }))
      .catch(console.log)
  }

  componentDidMount() {
    this.fetch_weather(); // call it immediately, then once every 10s
    this.tick = setInterval(this.fetch_weather, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const { icon, temp, city } = this.state;
    return (
      <div className='Weather'>
        <div className='WeatherIconTemp'>
          <img className='WeatherIcon' src={this.weatherIcon(icon)} alt='Weather Icon'/>
          <div className='WeatherTemp'>{ `${temp}°` }</div>
        </div>
        <div className='WeatherCity'>{ city }</div>
      </div>
    );
  }
}

export default Weather;
