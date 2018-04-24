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
        this.TickFunction =
            setInterval(
                () => this.setState({ time: this.dateToTime(new Date()) }),
                1000
            );
    }

    componentWillUnMount() {
        clearInterval(this.TickFunction); // stop the clock update function
    }

    dateToTime(date) {
        const appendZero = t => t < 10 ? `0${t}` : t;
        return `${appendZero(date.getHours())} ${appendZero(date.getMinutes())}`;
    }

    toDate(date) {
        const appendZero = t => t < 10 ? `0${t}` : t;
        return `${date.getFullYear()} ${appendZero(date.getMonth()+1)} ${appendZero(date.getDate())}`
    }

    render() {
        return (
            <div>
                <div className='Clock'>
                    {this.state.time}
                </div>
                <div className='ClockDate'>
                    {this.state.date}
                </div>
            </div>
        );
    }
}

export default Clock;
