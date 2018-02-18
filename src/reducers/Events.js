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
