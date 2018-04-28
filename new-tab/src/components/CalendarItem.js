import React, { Component } from 'react';
import config from '../config.js';
import '../css/Calendar.css';

class CalendarItem extends Component {
    constructor(props) {
        super(props);
        if (!props.item)
            throw new Error('No item given to CalendarItem');
        this.state = {
            type: "",
            name: "",
            location: "",
            time: "",
        };
    }

    /**
     * Special formatting for my calendar
     */
    format_special(name) {
        let s = name.split(' - ');
        if (s[0][0] === '*')
            s[0] = s[0].substring(2);
        s[1] = s[1].split( /\([A-Z]{2}\d{4}\)/ )[0]; // Keep everything before the course code.
        return s;
    }

    /**
     * Special formatting for my girlfriends calendar
     */
    format_regular(name) {
        let type = name.split(' ')[0];
        let course = name.substring(type.length+1);
        return [type, course];
    }

    dateToTime(date) {
        const appendZero = s => s < 10 ? `0${s}` : s;
        return `${appendZero(date.getHours())}:${appendZero(date.getMinutes())}`;
    }

    componentDidMount() {
        const item = this.props.item;
        const start = this.dateToTime(new Date(item.start.dateTime));
        const end = this.dateToTime(new Date(item.end.dateTime));
        const s = config.FORMAT_TYPE === 'special' ? this.format_special(item.summary) : this.format_regular(item.summary);
        this.setState({
            type: s[0],
            name: s[1],
            location: item.location ? item.location : "Ingen Sal",
            time: `${start} | ${end}`,
        });
    }

    render() {
        return (
            <div className='CalendarItem'>
                <div> {this.state.location} </div>
                <div> {this.state.name}     </div>
                <div> {this.state.time}     </div>
                <div> {this.state.type}     </div>
            </div>
        );
    }
}

export default CalendarItem;
