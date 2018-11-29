const { exec } = require('child_process');
exec('yarn build', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});


const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
});

const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

// Route everything through react
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 8000;

http.listen(port, function(){
  console.log('listening on *:', port);
});