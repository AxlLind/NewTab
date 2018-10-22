import React, { PureComponent } from 'react';
import '../css/Clock.css';

const fix = t => t > 9 ? t : `0${t}`;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class Clock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      date: '',
    }
    this.updateClock = this.updateClock.bind(this);
  }

  updateClock() {
    const d = new Date();
    const time = `${fix(d.getHours())} ${fix(d.getMinutes())}`;
    const date = `${days[d.getDay()]} ${fix(d.getDate())} ${fix(d.getMonth() + 1)}`;
    this.setState({ time, date });
  }

  componentDidMount() {
    this.updateClock(); // call once immediately, then once every 1s
    this.tick = setInterval(this.updateClock, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.tick); // stop the update function
  }

  render() {
    const { time, date } = this.state;
    return (
      <div className='Clock'>
        <div className='ClockTime'> { time } </div>
        <div className='ClockDate'> { date } </div>
      </div>
    );
  }
}

export default Clock;
