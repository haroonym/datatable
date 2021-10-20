const db = require('../db');

const getMovies = async () => {
  const { rows } = await db.query('SELECT * from movies');
  return rows;
};

module.exports = {
  getMovies,
};
