import React, { Component } from 'react';
import '../css/Calendar.css';

class CalendarItem extends Component {
    constructor(props) {
        super(props);
        if (!props.item)
            throw new Error('No item given to CalendarItem');

        const start = this.dateToTime(new Date(props.item.start.dateTime));
        const end   = this.dateToTime(new Date(props.item.end.dateTime));
        // special formatting for my calendar
        const s = props.item.summary.split(' - ');
        if (s[0][0] === '*')
            s[0] = s[0].substring(2);
        s[1] = s[1].split('.')[0]; // remove everything after the first dot
        this.state = {
            type: s[0],
            name: s[1],
            location: props.item.location,
            time: `${start} | ${end}`,
        };
    }

    dateToTime(date) {
        const appendZero = t => t < 10 ? `0${t}` : t;
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
