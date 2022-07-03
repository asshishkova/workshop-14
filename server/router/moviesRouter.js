const express = require('express');
const router = express.Router();
const movieService = require('./../service/movieService');

router.get('/', async (req, res, next) => {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies)
});

router.post('/:id', async (req, res, next) => {
  console.log('-------------','req.body:', req);
  const movieId = Number.parseInt(req.params.id);
  if (isNaN(movieId)) {
    const error = Error()
    error.statusCode = 400;
    error.message = 'Wrong parameters';
    throw error;
  }
  const data = await movieService.updateRating(movieId, req.body);
  res.status(200).json(data);
});


module.exports = router;
