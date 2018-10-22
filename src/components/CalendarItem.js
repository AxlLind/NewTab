import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import config from '../config.js';
import '../css/Calendar.css';

const appendZero = s => s < 10 ? `0${s}` : s;

const timeStr = d => `${appendZero(d.getHours())}:${appendZero(d.getMinutes())}`;

class CalendarItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
      time: "",
      location: "",
    };
  }

  /* Default formatting - Splits into [first word, rest] */
  format_regular(name) {
    const type = name.split(' ')[0];
    const course = name.substring(type.length + 1);
    return [type, course];
  }

  /* Special formatting for my calendar */
  format_special(name) {
    let s = name.split(' - ');
    if (s.length < 2)
      s.push("");
    if (s[0][0] === '*' && s[0].length > 1)
      s[0] = s[0].substring(2);
    s[1] = s[1].split( /\([A-Z]{2}\d{4}\)/ )[0]; // Keep everything before the course code.
    return s;
  }

  componentDidMount() {
    const { start, end, summary } = this.props.item;
    const location = this.props.item.location || 'Ingen Sal';
    const time = `${timeStr(new Date(start.dateTime))} | ${timeStr(new Date(end.dateTime))}`;

    const method = `format_${config.FORMAT_TYPE === 'special' ? 'special' : 'regular'}`;
    const [ type, name ] = this[method](summary);

    this.setState({ location, time, type, name });
  }

  render() {
    const { location, name, time, type } = this.state;
    return (
      <div className='CalendarItem'>
        <div> { location } </div>
        <div> { name }     </div>
        <div> { time }     </div>
        <div> { type }     </div>
      </div>
    );
  }
}

CalendarItem.propTypes = {
  item: PropTypes.object.isRequired,
  key:  PropTypes.string.isRequired,
}

export default CalendarItem;
