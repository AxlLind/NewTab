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
            rest: [],
        };
        this.auth = "";
    }

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


    loadItems(items) {
        let todays = [], tomorrows = [], rest = [];
        items.forEach(
            item => {
                let date = new Date(item.start.dateTime);
                if (date.getDate() === new Date().getDate())
                    todays.push(item);
                else if (date.getDate() === new Date().getDate() + 1)
                    tomorrows.push(item);
                else rest.push(item);
            }
        );
        this.setState({
            today: todays,
            tomorrow: tomorrows,
            rest: rest,
        });
    }

    componentDidMount() {
        this.loadCalendarAPI();
    }

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
                {this.calendarPart(this.state.today, 'Today')}
                {this.calendarPart(this.state.tomorrow, 'Tomorrow')}
                {this.calendarPart(this.state.rest, 'Later')}
            </div>
        );
    }
}

export default Calendar;
