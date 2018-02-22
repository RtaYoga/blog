const DEFAULT_INSPIRATION_STATE = {
  quotes: [{
    author: 'BKS IYENGAR',
    sharedBy: 'Kelsey Carlow',
    quote: "Yoga allows you to rediscover a sense of wholeness in your life, where you do not feel like you are constantly trying to fit broken pieces together."
  },{
    author: 'BKS IYENGAR',
    sharedBy: 'Kelsey Carlow',
    quote: "Yoga is like music, the rhythm of the body, the melody of the mind, and the harmony of the soul create a symphony of life"
  },{
    author: 'Eckhart Tolle',
    sharedBy: 'Kelsey Carlow',
    quote: "To know yourself as the Being underneath the thinker, the stillness underneath the mental noise, the love and joy underneath the pain, is freedom, salvation, enlightenment."
  }, {
    author: 'Lao Tzu',
    sharedBy: 'Kelsey Carlow',
    quote: "When I let go of what I am, I become what I might be."
  }]
}

export default function Inspiration(state=DEFAULT_INSPIRATION_STATE, action) {
  const { type, id, value } = action

  switch(type) {
    case 'SET_INSPIRATION_DETAILS':
      return {
        ...state,
        [id]: value
      }
    default:
      return state
  }
}
