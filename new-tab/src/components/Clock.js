import React, { Component } from 'react';
import '../css/Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '',
            date: '',
        }
        // got problems with updateClock, "setState is not a function"
        // the function loses context from setInterval.
        this.updateClock = this.updateClock.bind(this);
    }

    updateClock() {
        const fix = t => t > 9 ? t : `0${t}`;
        const d = new Date();
        const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
        this.setState({
            time: `${fix(d.getHours())} ${fix(d.getMinutes())}`,
            date: `${day} ${fix(d.getDate())} ${fix(d.getMonth()+1)}`,
        });
    }

    componentDidMount() {
        this.updateClock(); // call once immediately, then once every 1s
        this.tick = setInterval(this.updateClock, 1000);
    }

    componentWillUnMount() {
        clearInterval(this.tick); // stop the update function
    }

    render() {
        return (
            <div className='Clock'>
                <div className='ClockTime'> {this.state.time} </div>
                <div className='ClockDate'> {this.state.date} </div>
            </div>
        );
    }
}

export default Clock;
