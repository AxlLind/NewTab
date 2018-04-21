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
        let hours = date.getHours();
        if (hours.toString().length === 1)
            hours = `0${hours}`
            let minutes = date.getMinutes();
        if (minutes.toString().length === 1)
            minutes = `0${minutes}`
        return `${hours} ${minutes}`;
    }

    render() {
        return <div className='Clock'> {this.state.time} </div>;
    }
}

export default Clock;
