const roomController = {};

roomController.getMoreCharacters = async (req, res, next) => {
  try {
    const response = await fetch('https://swapi.dev/api/people/?page=3');
    const newChars = await response.json();
    console.log('goodbye');
    res.locals.newCharacters = newChars.results;
    return next();
  } catch (err) {
    return next({
      log: `starWarsController.getMoreCharacters: ERROR: ${err}`,
      message: { err: 'starWarsController.getMoreCharacters: ERROR: Check server logs for details' }
    });
  }

  // await fetch('https://swapi.dev/api/people/?page=3')
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log('goodbye');
  //     res.locals.newCharacters = response.results;
  //     return next();
  //   })
  //   .catch((err) => {
  //     return next({
  //       log: `starWarsController.getMoreCharacters: ERROR: ${err}`,
  //       message: { err: 'starWarsController.getMoreCharacters: ERROR: Check server logs for details' }
  //     });
  //   });
};

module.exports = roomController;
