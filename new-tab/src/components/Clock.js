import React, { Component } from 'react';
import '../css/Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: this.dateToTime(new Date()),
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

    render() {
        return <div className='Clock'> {this.state.time} </div>;
    }
}

export default Clock;
