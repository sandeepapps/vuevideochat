// allows us to enter a room name and have it available through out the course  of the application regardless of page
export default {
  room: '',
  user: {
    name: '',
    muted: false,
    paused: false
  },
  clients: [] // people who eventually join the room
}
