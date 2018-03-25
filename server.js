const io = require('socket.io')()

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client subscribe to timer with interval ', interval)
    setInterval(() => {
      client.emit('timer', new Date())
    }, interval)
  })
})

io.listen(3456)
console.log('server listening...')