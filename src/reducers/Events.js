const DEFAULT_EVENT_DETAILS = {
  event_details: {
    event_type: '',
    level: '',
    location: '',
    time: new Date(),
    online: true,
    participants: [/* Array of Profile Types */],
    comments: [/* Array of Comment Types */]
  },
  upcomingEvents: [{
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 2, 9, 11, 0, 0),
    endDate: new Date(2018, 2, 11, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 3, 20, 11, 0, 0),
    endDate: new Date(2018, 3, 22, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 4, 18, 11, 0, 0),
    endDate: new Date(2018, 4, 20, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 5, 22, 11, 0, 0),
    endDate: new Date(2018, 5, 24, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 6, 20, 11, 0, 0),
    endDate: new Date(2018, 6, 22, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 7, 17, 11, 0, 0),
    endDate: new Date(2018, 7, 19, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 8, 7, 11, 0, 0),
    endDate: new Date(2018, 8, 9, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training',
    allDay: false,
    desc: 'Extreme Butt Kicking',
    startDate: new Date(2018, 9, 5, 11, 0, 0),
    endDate: new Date(2018, 9, 7, 19, 0, 0),
  }, {
    id: 0,
    title: 'RYT200 Training Certification',
    allDay: false,
    desc: 'Yoga Lodge Retreat - Whidbey Island',
    startDate: new Date(2018, 10, 2, 12, 0, 0),
    endDate: new Date(2018, 10, 4, 17, 0, 0),
  }]
}

export default function Events(state=DEFAULT_EVENT_DETAILS, action) {
  const { type, id, value } = action

  switch(type) {
    case 'SET_EVENTS_DETAILS':
      return {
        ...state,
        event_details: {
          ...state,
          [id]: value
        }
      }
    default:
      return state
  }
}
