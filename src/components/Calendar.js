import React, { PureComponent } from 'react';
import CalendarItem from './CalendarItem.js';
import config from '../config.js';
import '../css/Calendar.css';

/* global chrome */

class Calendar extends PureComponent {
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
    this.fetchData = this.fetchData.bind(this);
  }

  /**
   * Splits the fetched items from google calendar's API
   * into the next 3 days, and then the rest.
   */
  loadItems(items) {
    const todays_date = new Date().getDate();
    const today = [], tomorrow = [], dayafter = [], rest = [];
    items.forEach(item => {
      switch ( new Date(item.start.dateTime).getDate() ) {
        case todays_date:      today.push(item); break;
        case todays_date+1: tomorrow.push(item); break;
        case todays_date+2: dayafter.push(item); break;
        default: rest.push(item);
      }
    });
    this.setState({
      today,
      tomorrow,
      dayafter,
      rest,
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
    const { NUM_EVENTS, GAPI_KEY, CAL_ID } = config;
    chrome.identity.getAuthToken({ interactive: true }, token => {
      const init = {
        async: true,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        'contentType': 'json',
      };
      const next_week = new Date();
      next_week.setDate(next_week.getDate() + 7);
      const params = this.postParameters({
        timeMin: new Date().toISOString(),
        timeMax: next_week.toISOString(),
        maxResults: NUM_EVENTS,
        singleEvents: true,
        orderBy: 'startTime',
        key: GAPI_KEY,
      });
      fetch(`https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events/${params}`, init)
        .then(res => res.json())
        .then(({ items }) => this.loadItems(items))
        .catch(console.log);
    });
  }

  componentDidMount() {
    this.fetchData();
    this.tick = setInterval(this.fetchData, 5000);
    setTimeout(() => this.setState({ triedFetching: true }), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  /**
   * Returns a part of the calendar, containing a title and calendar items
   */
  part(items, title) {
    if (items.length === 0) return '';
    return (
      <div className='CalendarPart'>
        <div className='CalendarTitle'> { title } </div>
        { items.map(i => <CalendarItem item={i} key={i.id}/>) }
      </div>
    );
  }

  calendar_parts() {
    const { today, tomorrow, dayafter, rest } = this.state;
    const num_items = today.length + tomorrow.length + dayafter.length + rest.length;
    if (num_items === 0) return (
      <div className='CalendarFailText'>
        { 'You have no events in the next week' }
      </div>
    );
    return (
      <div className='Calendar'>
        { this.part(today, 'Today') }
        { this.part(tomorrow, 'Tomorrow') }
        { this.part(dayafter, 'Day after tomorrow') }
        { this.part(rest, 'Later') }
      </div>
    );
  }

  render() {
    const { fetched, triedFetching } = this.state;
    if (!fetched) return (
      <div className='CalendarFailText'>
        { triedFetching ? 'Could not fetch calendar' : '' }
      </div>
    );
    return this.calendar_parts();
  }
}

export default Calendar;
