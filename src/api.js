import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3456')
const subscribeToTimer = (interval, cb) => {
  socket.on('timer', timestamp => cb(null, timestamp))
  socket.emit('subscribeToTimer', interval)
}

export { subscribeToTimer }