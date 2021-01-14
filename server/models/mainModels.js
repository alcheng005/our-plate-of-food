const mongoose  = require('mongoose');

const { mongoURI } = require('../../config.js');

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'our-plate-of-food'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
  
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  code: String,
  locations: [String]
})

const Room = mongoose.model('room', roomSchema);

// for future: userSchema
// const userSchema = new Schema({
//   name: String,
//   favLocations: [String]
// })

// const User = mongoose.model('user', userSchema);

module.exports = {
  Room,
  // for future: User
}