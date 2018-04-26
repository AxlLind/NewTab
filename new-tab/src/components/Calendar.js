import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';
import '../css/Calendar.css';

/* global gapi */
const CAL_ID    = '5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com';
const CLIENT_ID = '24789309366-u24u4e8u1h7klc20ukv57pkcrq41kk5s.apps.googleusercontent.com';
const API_KEY   = 'AIzaSyDhsYNMlYnJjdEfHIZt0UoL-4dKuQj6n6s';
const DISC_DOC  = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPE     = 'https://www.googleapis.com/auth/calendar.readonly';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: [],
            tomorrow: [],
            dayafter: [],
            rest: [],
        };
    }

    /**
     * Loads the google api and appends the script tag to the body.
     * After that the function authenticates the user through google Oauth 2.0.
     * Lastly it makes an api request to the google calendar api, and fetches
     * the next 10 items in the calendar.
     */
    loadCalendarAPI() {
        let api_src = document.createElement('script');
        api_src.src = 'https://apis.google.com/js/client.js';
        api_src.onload = () => {
            gapi.load('client:auth2', () => {
                gapi.client.init({
                    'clientId': CLIENT_ID,
                    'apiKey': API_KEY,
                    'discoveryDocs': [DISC_DOC],
                    'scope': SCOPE,
                }).then(() => {
                    this.auth = gapi.auth2.getAuthInstance();
                    if (!this.auth.isSignedIn.get())
                        this.auth.signIn();
                }).then(() => gapi.client.calendar.events.list({
                    'calendarId': CAL_ID,
                    'timeMin': (new Date()).toISOString(),
                    'singleEvents': true,
                    'maxResults': 9,
                    'orderBy': 'startTime'
                })).then(res => this.loadItems(res.result.items))
            });
        }
        document.body.appendChild(api_src);
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

    componentDidMount() {
        this.loadCalendarAPI();
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
