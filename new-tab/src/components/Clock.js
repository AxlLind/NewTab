import React, { Component } from 'react';
import '../css/Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: this.dateToTime(new Date()),
            date: this.toDate(new Date()),
        }
    }

    componentDidMount() {
        this.tick =
            setInterval(
                () => this.setState({
                    time: this.dateToTime(new Date()),
                    date: this.toDate(new Date()),
                }), 1000
            );
    }

    componentWillUnMount() {
        clearInterval(this.tick); // stop the update function
    }

    dateToTime(date) {
        const appendZero = t => t > 9 ? t : `0${t}`;
        return `${appendZero(date.getHours())} ${appendZero(date.getMinutes())}`;
    }

    toDate(date) {
        const appendZero = t => t > 9 ? t : `0${t}`;
        const day_str = d => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d];
        return `${day_str(date.getDay())} ${appendZero(date.getDate())} ${appendZero(date.getMonth()+1)}`;
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
