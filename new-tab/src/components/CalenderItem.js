import React, { Component } from 'react';
import '../css/Calender.css';

class CalenderItem extends Component {
    constructor(props) {
        super(props);

        let name = 'This is an item'
        if (props.name)
            name = props.name;
        this.state = {name: name};
    }

    render() {
        return (
            <div className='CalenderItem'>
                {this.state.name}
            </div>
        );
    }
}

export default CalenderItem;
