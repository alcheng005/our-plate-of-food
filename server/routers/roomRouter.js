const express = require('express');

const roomController = require('../controllers/roomController.js');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/',
  (req, res) => {
    console.log('req.params:', req.params);
    console.log('am in room.js in / router');
    return res.status(200).json("sup");
  }
);
//   fileController.getCharacters,
//   fileController.getFavs,
//   function (req, res) {
//     res.status(200).json({
//       characters: res.locals.characters,
//       favs: res.locals.favs
//     });
//   }

module.exports = router;
