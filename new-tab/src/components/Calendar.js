import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';
import config from '../config.js';
import '../css/Calendar.css';

/* global chrome */

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today:    [],
            tomorrow: [],
            dayafter: [],
            rest:     [],
        };
    }

    /**
     * Splits the fetched items from google calendar's api
     * into the next 3 days, and then the rest.
     */
    loadItems(items) {
        let todays = [], tomorrows = [], dayafters = [], rest = [];
        let todays_date = new Date().getDate();
        items.forEach(item => {
                switch ( new Date(item.start.dateTime).getDate() ) {
                    case todays_date:      todays.push(item); break;
                    case todays_date+1: tomorrows.push(item); break;
                    case todays_date+2: dayafters.push(item); break;
                    default: rest.push(item);
                }
            }
        );
        this.setState({
            today: todays,
            tomorrow: tomorrows,
            dayafter: dayafters,
            rest: rest,
        });
    }

    postParameters(o) {
        let s = '?';
        for (let attr in o)
            s += `${attr}=${o[attr]}&`;
        return s.slice(0, -1); // remove last '&'
    }

    /**
     * Fetches an authentication token from the chrome identity api.
     * Then calls the google calendar API and fetches the calendar items
     */
    componentDidMount() {
        chrome.identity.getAuthToken({interactive: true}, token => {
            let init = {
                method: 'GET',
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                'contentType': 'json',
            };
            let parameters = this.postParameters({
                timeMin: new Date().toISOString(),
                maxResults: config.NUM_EVENTS,
                singleEvents: 'true',
                orderBy: 'startTime',
                key: config.GAPI_KEY,
            });
            fetch(`https://www.googleapis.com/calendar/v3/calendars/${config.CAL_ID}/events/${parameters}`, init)
                .then(res => res.json())
                .then(res => this.loadItems(res.items));
        });
    }

    /**
     * Returns a part of the calendar, containing a title and subsequent calendar items
     */
    calendarPart(items, title) {
        return (items.length === 0) ? '' : (
            <div className='CalendarPart'>
                <div className='CalendarTitle'> {title} </div>
                {items.map( item => <CalendarItem item={item} key={item.id}/> )}
            </div>
        );
    }

    render() {
        return (
            <div className='Calendar'>
                {this.calendarPart(this.state.today, 'Idag')}
                {this.calendarPart(this.state.tomorrow, 'I morgon')}
                {this.calendarPart(this.state.dayafter, 'I övermorgon')}
                {this.calendarPart(this.state.rest, 'Senare')}
            </div>
        );
    }
}

export default Calendar;
