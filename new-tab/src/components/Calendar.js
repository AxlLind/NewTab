import React, { Component } from 'react';
import CalendarItem from './CalendarItem.js';
import '../css/Calendar.css';

// const cal_ID = '5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com';
// const API_Key = 'AIzaSyDhsYNMlYnJjdEfHIZt0UoL-4dKuQj6n6s';
// const cal_query = `https://www.googleapis.com/calendar/v3/calenders/${cal_ID}/events`;

const example_res = {
    kind: "calendar#events",
    etag: "\"p33sepctsm72dk0g\"",
    summary: "Mitt schema",
    description: "Ditt personliga schema innehållande schema- och kalenderhändelser från dina kurser, program och grupper",
    updated: "2018-04-18T17:50:35.067Z",
    timeZone: "UTC",
    accessRole: "reader",
    defaultReminders: [],
    nextPageToken: "Ck8KQV9jZ28zMGMxaTc0b202cDlrY2tvajRvOWk3NWdtYW9yNWM5Z2phY2I2YzhzMzJwMWtjOWlqaWRiM2Nnc2o2ZGhrGAEggIDAq8X0v4AWGg0IABIAGPjss7yxxNoC",
    items: [
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_64s3ae1hcpi64e9o70s3ce9k6cp3gc1k6sqj2pb26opj4ohpc5gjgob270rm6or3",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=XzY0czNhZTFoY3BpNjRlOW83MHMzY2U5azZjcDNnYzFrNnNxajJwYjI2b3BqNG9ocGM1Z2pnb2IyNzBybTZvcjMgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:32:37.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Föreläsning - Mjukvarukonstruktion (DD1393)",
      description: "https://www.kth.se/social/course/DD1393/subgroup/ht-2017-mvk17/event/127916/\n\nTillhör: HT 2017 mvk17\n\n",
      location: "D1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-04-21T11:00:00Z"
      },
      end: {
       dateTime: "2018-05-02T13:00:00Z"
      },
      iCalUID: "18581fdb988869432804751eb632b9aa8ab87ccc",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_6ti3ip1l6pim4p9mcco38chp69gmcphp64pj6c3474ojip1h74sm6o9i6crmae9n",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=XzZ0aTNpcDFsNnBpbTRwOW1jY28zOGNocDY5Z21jcGhwNjRwajZjMzQ3NG9qaXAxaDc0c202bzlpNmNybWFlOW4gNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:32:07.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Information - Programsammanhållande kurs i datateknik (DD1390).\nSe beskrivning",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124682/\n\nTillhör: HT 2016 prosam16\n\n\n\nAnmärkning: Inför åk 3\n\n",
      location: "D1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-04-23T13:00:00Z"
      },
      end: {
       dateTime: "2018-04-23T14:00:00Z"
      },
      iCalUID: "7d9d56ebe6c04292aff91330d919d199ca237e97",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_6tim6dj268r36ob275imcphh6lgj2c9j6sq3aeb260s30phhckq3ceb1cgq6coj4",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=XzZ0aW02ZGoyNjhyMzZvYjI3NWltY3BoaDZsZ2oyYzlqNnNxM2FlYjI2MHMzMHBoaGNrcTNjZWIxY2dxNmNvajQgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:27:08.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Seminarium - Programsammanhållande kurs i datateknik (DD1390)",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124384-2/\n\nTillhör: HT 2016 prosam16\n\n",
      location: "Mötesrum 4523",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-02-01T07:00:00Z"
      },
      end: {
       dateTime: "2018-02-01T16:00:00Z"
      },
      iCalUID: "7ec6b263ab9eff15a1137459b080f1e469ad4fbd",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_71hm2phjcdj3ap9i6sp3ec1jcdgm6e1nchhm8c1mc4pmap1mc8rjiphi70s68d31",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=XzcxaG0ycGhqY2RqM2FwOWk2c3AzZWMxamNkZ202ZTFuY2hobThjMW1jNHBtYXAxbWM4cmppcGhpNzBzNjhkMzEgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:31:14.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Föreläsning - Programsammanhållande kurs i datateknik (DD1390)",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124689/\n\nTillhör: HT 2016 prosam16\n\n",
      location: "E1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-04-11T08:00:00Z"
      },
      end: {
       dateTime: "2018-04-11T10:00:00Z"
      },
      iCalUID: "8caf3cf5e272703cac87dcd06a3ed6b79f288d4a",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_74q6ce1ic5gm4cb270p36o9pc8p30phn6kp3ce1n65imap1n71gm6dhpckrm4eb4",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=Xzc0cTZjZTFpYzVnbTRjYjI3MHAzNm85cGM4cDMwcGhuNmtwM2NlMW42NWltYXAxbjcxZ202ZGhwY2tybTRlYjQgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:25:50.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Föreläsning - Mjukvarukonstruktion (DD1393)",
      description: "https://www.kth.se/social/course/DD1393/subgroup/ht-2017-mvk17/event/127898/\n\nTillhör: HT 2017 mvk17\n\n",
      location: "Q1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-01-18T12:00:00Z"
      },
      end: {
       dateTime: "2018-01-18T14:00:00Z"
      },
      iCalUID: "94f82aab1b823a9b20f7526871eed78ac69e7b9d",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_75j34pho6os36d9k68rj4p1o70o3adj1c9i32dpp60o30dj6c8o36e1g6krjapb4",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=Xzc1ajM0cGhvNm9zMzZkOWs2OHJqNHAxbzcwbzNhZGoxYzlpMzJkcHA2MG8zMGRqNmM4bzM2ZTFnNmtyamFwYjQgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:28:00.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Föreläsning - Mjukvarukonstruktion (DD1393)",
      description: "https://www.kth.se/social/course/DD1393/subgroup/ht-2017-mvk17/event/127904/\n\nTillhör: HT 2017 mvk17\n\n",
      location: "D1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-02-12T12:00:00Z"
      },
      end: {
       dateTime: "2018-02-12T14:00:00Z"
      },
      iCalUID: "9f2f868354272d88056abd1790006fb0380575ed",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_c5hjgcpo65gm4opp6lj38p9n6dj64chp6sr3edr274q3cdhl6pj3eopp6phj8eb1",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=X2M1aGpnY3BvNjVnbTRvcHA2bGozOHA5bjZkajY0Y2hwNnNyM2VkcjI3NHEzY2RobDZwajNlb3BwNnBoajhlYjEgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:32:42.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Seminarium - Programsammanhållande kurs i datateknik (DD1390)",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124385-2/\n\nTillhör: HT 2016 prosam16\n\n",
      location: "Mötesrum 4523",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-05-03T06:00:00Z"
      },
      end: {
       dateTime: "2018-05-03T15:00:00Z"
      },
      iCalUID: "ac8381abc95f4e73fb297677b946656f7c96c49a",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_cdijid34coqjgp9gc8s6cd1p6ks36chk69j36d9jcopm2o9h6cpjic1kchi3ae33",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=X2NkaWppZDM0Y29xamdwOWdjOHM2Y2QxcDZrczM2Y2hrNjlqMzZkOWpjb3BtMm85aDZjcGppYzFrY2hpM2FlMzMgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:33:00.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Seminarium - Programsammanhållande kurs i datateknik (DD1390)",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124546-2/\n\nTillhör: HT 2016 prosam16\n\n",
      location: "Mötesrum 4523",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-05-08T06:00:00Z"
      },
      end: {
       dateTime: "2018-05-08T10:00:00Z"
      },
      iCalUID: "ce94df58e0b8f49583242f353f3aa133904dd58c",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_cdj3coph61h3acpmcpj6cob464o6cdr2ccpj0opn71j3ae9l70s64p1h6thjid9o",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=X2NkajNjb3BoNjFoM2FjcG1jcGo2Y29iNDY0bzZjZHIyY2NwajBvcG43MWozYWU5bDcwczY0cDFoNnRoamlkOW8gNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:32:21.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Information - Programsammanhållande kurs i datateknik (DD1390).\nSe beskrivning",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124671-2/\n\nTillhör: HT 2016 prosam16\n\n\n\nAnmärkning: Masterprograminfo\n\n",
      location: "E1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-04-25T13:00:00Z"
      },
      end: {
       dateTime: "2018-04-25T15:00:00Z"
      },
      iCalUID: "cf6c10b536fffad10f7bc30c78f59588bd17c958",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     },
     {
      kind: "calendar#event",
      etag: "\"3024193096366000\"",
      id: "_cgo30c1i74om6p9kckoj4o9i75gmaor5c9gjacb6c8s32p1kc9ijidb3cgsj6dhk",
      status: "confirmed",
      htmlLink: "https://www.google.com/calendar/event?eid=X2NnbzMwYzFpNzRvbTZwOWtja29qNG85aTc1Z21hb3I1YzlnamFjYjZjOHMzMnAxa2M5aWppZGIzY2dzajZkaGsgNWxwNmg4Z2l0ajJwMDlmZ3VqbmRiMW9rMmU3bGpxM3ZAaQ",
      created: "2017-11-30T12:31:05.000Z",
      updated: "2017-12-01T02:49:08.183Z",
      summary: "* Föreläsning - Programsammanhållande kurs i datateknik (DD1390)",
      description: "https://www.kth.se/social/course/DD1390/subgroup/ht-2016-483/event/124688/\n\nTillhör: HT 2016 prosam16\n\n",
      location: "E1",
      creator: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      organizer: {
       email: "5lp6h8gitj2p09fgujndb1ok2e7ljq3v@import.calendar.google.com",
       displayName: "Mitt schema",
       self: true
      },
      start: {
       dateTime: "2018-04-09T13:00:00Z"
      },
      end: {
       dateTime: "2018-04-09T16:00:00Z"
      },
      iCalUID: "d000291ce4e12a29aeceba51fb81d4be95cd9364",
      sequence: 0,
      reminders: {
       useDefault: true
      }
     }
    ]
}

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            today: [],
            rest: [],
        };
    }

    componentDidMount() {
        // fetch(cal_query)
        //     .then( res => res.json() )
        //     .then( res => this.setState({items: res.items}) );
        let todaysItems = [], rest = [];
        example_res.items.forEach(
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
                {this.calendarPart(this.state.rest, 'Later')}
            </div>
        );
    }
}

export default Calendar;
