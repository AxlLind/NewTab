import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';
import '../css/Calendar.css';

/* global chrome */
const API_KEY   = 'AIzaSyDhsYNMlYnJjdEfHIZt0UoL-4dKuQj6n6s';

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
     * Splits the fetches items from google calendar's api
     * into the next 3 days, and then the rest.
     */
    loadItems(items) {
        let todays = [], tomorrows = [], dayafters = [], rest = [];
        items.forEach(
            item => {
                switch (new Date(item.start.dateTime).getDate()) {
                    case new Date().getDate():      todays.push(item); break;
                    case new Date().getDate()+1: tomorrows.push(item); break;
                    case new Date().getDate()+2: dayafters.push(item); break;
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

    /**
     * Fetches an authentication token from the chrome identity api.
     * Then calls the google calendar API and fetches the next 10 events
     */
    componentDidMount() {
        let CAL_ID, NUM_EVENTS;
        chrome.storage.sync.get(['CAL_ID', 'NUM_EVENTS'], res => {
            CAL_ID = res.CAL_ID;
            NUM_EVENTS = res.NUM_EVENTS;
        });
        if (!CAL_ID) CAL_ID = 'primary';
        if (!NUM_EVENTS) NUM_EVENTS = 9;
        chrome.identity.getAuthToken({interactive: true}, token => {
            let init = {
                method: 'GET',
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                'contentType': 'json'
            }
            fetch(`https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events/` +
                  `?timeMin=${new Date().toISOString()}&singleEvents=true&maxResults=${NUM_EVENTS}&orderBy=startTime&key=${API_KEY}`,
                  init)
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
