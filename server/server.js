const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 3000;
const pathToOPOF = path.dirname(__dirname);

const roomController = require('./controllers/roomController.js');

const sharedState = {
  locations: ['(List is empty, add something!)'],
  numItems: 0
}
// app.listen(PORT, () => {
//   console.log(`app listening on port: ${PORT}`);
// });

http.listen(PORT, () => {
  console.log(`http listening on port :${PORT}`);
});

io.on('connection', (socket) => {
  console.log('Someone connected to a Room');
  socket.emit('connection', sharedState.locations);
  socket.on('add-item', (newLoc) => {
    if (sharedState.locations[0] === '(List is empty, add something!)') sharedState.locations = [];
    sharedState.locations.push(newLoc);
    sharedState.numItems = sharedState.locations.length;
    console.log('item was added');
    io.emit('refresh-list', sharedState.locations, sharedState.numItems);
  })
  socket.on('remove-item', (locToRemove) => {
    console.log('locToRemove in server remove-item', locToRemove);
    sharedState.locations = sharedState.locations.filter((loc) => {
      return loc !== locToRemove;
    });
    sharedState.numItems = sharedState.locations.length;
    if (sharedState.numItems === 0) sharedState.locations = ['(List is empty, add something!)'];
    console.log('item was removed');
    io.emit('refresh-list', sharedState.locations, sharedState.numItems);
  })
});

/*
// ***websocket stuff below does not work***
// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ server: server });

// wss.on('connection', function connection(ws) {
//   console.log('A new client connected');
//   ws.send('Hello there');

//   ws.on('message', function incoming(message) {
//     console.log('received your message:', message);
//     ws.send('Got your message', message);
//   })
// });
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(pathToOPOF, '/build')));

// app.get('/createroom',
// roomController.generateRoom,
// (req, res) => {
//   // const roomendpoint = "/room/"+req.params.roomid
  
//   // for future: create some middleware to create a room
//   return res.redirect('/room/FAKE');
// })

// app.post('/joinroom', (req, res) => {
//   // for future: verify that room exists
//   console.log('req.body for /joinroom:', req.body);
//   return res.redirect('/room/FAKE');
// })

// app.post('/room/:roomID/add',
//   roomController.addLocation,
//   (req, res) => {
//     console.log('req.body for /room/:roomID/add', req.body);
//     return res.status(200);
//   }
// );

// app.get('/room/:roomID', (req, res) => {
//   console.log('req.params in app.get /room/:roomid', req.params);
//   return res.sendFile(path.join(pathToOPOF, '/client/room.html'));
// });
  
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(pathToOPOF, '/client/index.html'));
})

// route handler for requests to unknown routes
app.use('*', (req, res) => {
  res.status(404).send('<h1> Page not found </h1>');
});

// global error handler
app.use(function (err, req, res, next) {
  const errorObj = Object.assign({
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  }, err);
  
  // console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

