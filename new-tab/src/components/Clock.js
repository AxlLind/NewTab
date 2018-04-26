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
                () => this.setState({
                    time: this.dateToTime(new Date()),
                    date: this.toDate(new Date()),
                }),
                1000
            );
    }

    componentWillUnMount() {
        clearInterval(this.TickFunction); // stop the update function
    }

    dateToTime(date) {
        const appendZero = t => t < 10 ? `0${t}` : t;
        return `${appendZero(date.getHours())} ${appendZero(date.getMinutes())}`;
    }

    toDate(date) {
        const appendZero = t => t < 10 ? `0${t}` : t;
        const day_str = day => {
            switch (day) {
                case 0: return 'Sun';
                case 1: return 'Mon';
                case 2: return 'Tue';
                case 3: return 'Wed';
                case 4: return 'Thu';
                case 5: return 'Fri';
                case 6: return 'Sat';
                default: // to stop linter, this cannot happen
                    throw new Error('Day to str: outside range 0-6');
            }
        };
        return `${day_str(date.getDay())} ${appendZero(date.getDate())} ${appendZero(date.getMonth()+1)}`
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
