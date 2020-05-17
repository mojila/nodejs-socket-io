const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  console.log('client connected.')
  
  client.on('from_mobile', data => {
    console.log(data)
    io.emit('to_raspi', data)
  });

  client.on('from_raspi', data => {
    console.log(data)
    io.emit('to_mobile', data)
  });

  client.on('disconnect', () => {
    console.log('client disconnected.')
  });
});

server.listen(3000, '0.0.0.0', () => console.log('Socket.IO Server Running on PORT 3000'));