// const models = require('../models/mainModels.js');

// const roomController = {};

// roomController.generateRoom = async (req, res, next) => {
//   try {
//     // generate a four letter room code here and store it somewhere
//     return next();
//   } catch(err) {
//     return next({
//       log: `roomController.generateRoom: ERROR: ${err}`,
//       message: { err: 'roomController.generateRoom: ERROR: Check server logs for details' }
//     });
//   }
// };

// roomController.addLocation = async (req, res, next) => {
//   try {
//     const roomCode = req.params.roomID;
//     const newLoc = req.body.location;
//     console.log("roomCode in roomController.addLocation:", roomCode);
//     console.log("newLoc in roomController.addLocation:", newLoc);
//     await models.Room.findOneAndUpdate({ roomcode: roomCode },
//       { "$push": { location: newLoc } },
//       {
//         new: true, 
//         upsert: true
//       }
//     );
//     return next();
//   } catch(err) {
//     return next({
//       log: `roomController.addLocation: ERROR: ${err}`,
//       message: { err: 'roomController.addLocation: ERROR: Check server logs for details' }
//     });
//   }
// };

// module.exports = roomController;
