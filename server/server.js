const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;
const pathToOPOF = path.dirname(__dirname);

const roomController = require('./controllers/roomController.js');

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
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

app.get('/createroom',
roomController.generateRoom,
(req, res) => {
  // const roomendpoint = "/room/"+req.params.roomid
  
  // for future: create some middleware to create a room
  return res.redirect('/room/FAKE');
})

app.post('/joinroom', (req, res) => {
  // for future: verify that room exists
  console.log('req.body for /joinroom:', req.body);
  return res.redirect('/room/FAKE');
})

app.post('/room/:roomID/add',
roomController.addLocation,
(req, res) => {
  console.log('req.body for /room/:roomID/add', req.body);
  return res.status(200);
}
);

app.get('/room/:roomID', (req, res) => {
  console.log('req.params in app.get /room/:roomid', req.params);
  return res.sendFile(path.join(pathToOPOF, '/client/pages/roompage/room.html'));
});
  
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(pathToOPOF, '/client/pages/homepage/index.html'));
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

