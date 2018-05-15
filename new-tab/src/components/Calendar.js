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
            fetched: false,
            triedFetching: false,
        };
    }

    /**
     * Splits the fetched items from google calendar's API
     * into the next 3 days, and then the rest.
     */
    loadItems(items) {
        let todays_date = new Date().getDate();
        let today = [], tomorrow = [], dayafter = [], rest = [];
        items.forEach(item => {
            switch ( new Date(item.start.dateTime).getDate() ) {
                case todays_date:      today.push(item); break;
                case todays_date+1: tomorrow.push(item); break;
                case todays_date+2: dayafter.push(item); break;
                default: rest.push(item);
            }
        });
        this.setState({
            today:    today,
            tomorrow: tomorrow,
            dayafter: dayafter,
            rest:     rest,
            fetched: true,
        });
    }

    /**
     * Converts a JS object into post parameters
     */
    postParameters(obj) {
        let s = '?';
        for (let attr in obj)
            s += `${attr}=${obj[attr]}&`;
        return s.slice(0, -1); // remove last '&'
    }

    /**
     * Fetches an authentication token from the chrome identity API.
     * Then calls the google calendar API and fetches the calendar items
     */
    fetchData() {
        chrome.identity.getAuthToken({interactive: true}, token => {
            let init = {
                method: 'GET',
                async: true,
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
                'contentType': 'json',
            };
            let params = this.postParameters({
                timeMin: new Date().toISOString(),
                maxResults: config.NUM_EVENTS,
                singleEvents: true,
                orderBy: 'startTime',
                key: config.GAPI_KEY,
            });
            fetch(`https://www.googleapis.com/calendar/v3/calendars/${config.CAL_ID}/events/${params}`, init)
                .then(res => res.json())
                .then(res => this.loadItems(res.items))
                .catch(console.log);
        });
    }

    componentDidMount() {
        this.fetchData();
        this.tick = setInterval(() => this.fetchData(), 5000);
        setTimeout(() => this.setState({triedFetching: true}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tick);
    }

    /**
     * Returns a part of the calendar, containing a title and calendar items
     */
    part(items, title) {
        return (items.length === 0) ? '' : (
            <div className='CalendarPart'>
                <div className='CalendarTitle'> {title} </div>
                {items.map( item => <CalendarItem item={item} key={item.id}/> )}
            </div>
        );
    }

    render() {
        return this.state.fetched ? (
            <div className='Calendar'>
                {this.part(this.state.today, 'Idag')}
                {this.part(this.state.tomorrow, 'I morgon')}
                {this.part(this.state.dayafter, 'I övermorgon')}
                {this.part(this.state.rest, 'Senare')}
            </div>) :
            <div className='CalendarFailText'>{this.state.triedFetching ? 'Could not fetch calendar' : ''}</div>
    }
}

export default Calendar;
