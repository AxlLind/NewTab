import React, { Component } from 'react';
import '../css/Calendar.css';

class CalendarItem extends Component {
    constructor(props) {
        super(props);
        if (!props.item)
            throw new Error('No item given to CalendarItem');

        // special formatting for my calendar
        let start = this.dateToTime(new Date(props.item.start.dateTime));
        let end   = this.dateToTime(new Date(props.item.end.dateTime));
        let s = props.item.summary.split('-');
        s[1] = s[1].split('.')[0];
        this.state = {
            type: s[0].substring(2),
            name: s[1],
            location: props.item.location,
            time: `${start} - ${end}`,
        };
    }

    dateToTime(date) {
        let hours = date.getHours();
        if (hours.toString().length === 1)
            hours = `0${hours}`
            let minutes = date.getMinutes();
        if (minutes.toString().length === 1)
            minutes = `0${minutes}`
        return `${hours}:${minutes}`;
    }

    render() {
        return (
            <div className='CalendarItem'>
                <div> {this.state.location} </div>
                <div> {this.state.type}     </div>
                <div> {this.state.time}     </div>
                <div> {this.state.name}     </div>
            </div>
        );
    }
}

export default CalendarItem;
