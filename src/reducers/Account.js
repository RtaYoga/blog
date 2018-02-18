const DEFAULT_EVENTS_STATE = {
  classes: [/* Array of Event Details */], // registered or interested classes
  retreats: [/* Array of Event Details */], // " ... " retreats
  adventures: [/* Array of Event Details */] // " ... " adventures
}

const DEFAULT_ACCOUNT_STATE = {
  // Put Initial Account State Here
  profile: {
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
  },
  events: {
    registered_events: DEFAULT_EVENTS_STATE,
    interested_events: DEFAULT_EVENTS_STATE,
  },
  auth: {
    password: '',
    loggedIn: false
  }
}


export default function Account(state=DEFAULT_ACCOUNT_STATE, action) {
  const { type, id, value } = action

  switch(type) {
    case 'SET_ACCOUNT_PROFILE_DETAILS':
      return {
        ...state,
        profile: {
          ...state['profile'],
          [id]: value
        }
      }
    case 'SET_ACCOUNT_EVENTS_DETAILS':
      return {
        ...state,
        events: {
          ...state['events'],
          [id]: value
        }
      }
    case 'SET_ACCOUNT_AUTH_DETAILS':
      return {
        ...state,
        auth: {
          ...state['auth'],
          [id]: value
        }
      }
    default:
      return state
  }
}
