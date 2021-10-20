const asyncHandler = require('express-async-handler');
const model = require('../model/movies');

const getMovies = asyncHandler(async (req, res) => {
  res.status(200).json(await model.getMovies());
});

module.exports = {
  getMovies,
};
