exports.init = function ({ http }) {
  var io = require('socket.io')(http);
  io.on('connection', function (socket) {
    console.log('a user connected');
    socket.data = {};
    socket.update = function(key, value){
      socket.data[key] = value;
      socket.emit('update', socket.data);
    }
    timeUpdater(socket);
    socket.on('action', function(action){
      
    });

  });
}

function timeUpdater(socket){
  setInterval(function(){
    socket.update('date', new Date());
  }, 1000)
}