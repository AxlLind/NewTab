import React, { Component } from 'react';
import '../css/Calendar.css';

class CalendarItem extends Component {
    constructor(props) {
        super(props);
        if (!props.item)
            throw new Error('No item given to CalendarItem');
        // special formatting for my calendar
        let s = props.item.summary.split(' - ');
        if (s[0][0] === '*')
            s[0] = s[0].substring(2);
        s[1] = s[1].split( /\([A-Z]{2}\d{4}\)/ )[0]; // Keep everything before course code.
        const start = this.dateToTime(new Date(props.item.start.dateTime));
        const end   = this.dateToTime(new Date(props.item.end.dateTime));
        this.state = {
            type: s[0],
            name: s[1],
            location: !props.item.location ? "Ingen Sal" : props.item.location,
            time: `${start} | ${end}`,
        };
    }

    dateToTime(date) {
        const appendZero = s => s < 10 ? `0${s}` : s;
        return `${appendZero(date.getHours())}:${appendZero(date.getMinutes())}`;
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
