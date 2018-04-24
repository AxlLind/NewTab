import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';
import '../css/Calendar.css';

/* global gapi */
const CAL_ID    = '5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com';
const CLIENT_ID = '24789309366-u24u4e8u1h7klc20ukv57pkcrq41kk5s.apps.googleusercontent.com';
const DISC_DOC  = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const API_KEY   = 'AIzaSyDhsYNMlYnJjdEfHIZt0UoL-4dKuQj6n6s';
const SCOPE     = 'https://www.googleapis.com/auth/calendar.readonly';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: [],
            rest: [],
            api_loaded: false,
        };

        this.auth = "";
    }

    loadCalendarAPI() {
        let api = document.createElement('script');
        api.src = 'https://apis.google.com/js/client.js';

        api.onload = () => {
            gapi.load('client:auth2', () => {
                gapi.client.init({
                    'apiKey': API_KEY,
                    'discoveryDocs': [DISC_DOC],
                    'clientId': CLIENT_ID,
                    'scope': SCOPE,
                }).then(() => {
                    this.auth = gapi.auth2.getAuthInstance();
                    this.auth.isSignedIn.listen(this.updateSignedInStatus);

                    //this.auth.signIn();
                }).then(() => gapi.client.calendar.events.list({
                    'calendarId': CAL_ID,
                    'timeMin': (new Date()).toISOString(),
                    'singleEvents': true,
                    'maxResults': 10,
                    'orderBy': 'startTime'
                })).then(res => this.loadItems(res.result.items))
            });
        }
        document.body.appendChild(api);
    }

    updateSignedInStatus() {
        let user = this.auth.currentUser.get();
        if (user.hasGrantedScope(SCOPE)) {
            console.log('Autherized');
        } else {
            console.log('Not autherized');
        }
    }


    loadItems(items) {
        let todaysItems = [], rest = [];
        items.forEach(
            item => {
                let date = new Date(item.start.dateTime);
                if (date.getDate() === new Date().getDate())
                todaysItems.push(item);
                else rest.push(item);
            }
        );
        this.setState({
            today: todaysItems,
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
                {this.calendarPart(this.state.rest,  'Later')}
            </div>
        );
    }
}

export default Calendar;
