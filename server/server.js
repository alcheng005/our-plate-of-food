const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const pathToOPOF = path.dirname(__dirname);

// set router for /room requests
const roomRouter = require(path.join(pathToOPOF, './server/routers/roomRouter.js'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', (req, res) => {
  console.log('req.params:', req.params);
  express.static(path.join(pathToOPOF, '/build'))
});

// set handler for /room requests
app.use('/room', roomRouter);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(pathToOPOF, '/client/pages/homepage/index.html'));
})

app.get('/createroom', (req, res) => {
  // const roomendpoint = "/room/"+req.params.roomid

  // for future: create some middleware to create a room
  return res.redirect('room/');
})

app.post('/joinroom', (req, res) => {
  // for future: verify that room exists
  console.log('req.body for /joinroom:', req.body);
  return res.redirect('/room/:roomid');
})


// app.get('/build', (req, res) => {
//   res.sendFile(path.join(pathToOPOF, '/build/bundle.js'));
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
