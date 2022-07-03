const { Movie } = require('./../storage/models');

async function getAllMovies() {
    try {
        let movies = await Movie.findAll();
        console.log("Querying DB movies. Total movies", movies ? movies.length : 0);
        return movies
    } catch (e) {
        console.log("Failed to fetch movies", e);
    }
}

async function updateRating(movieId, body) {
  return await Movie.update({
    rating: body.rating
  }, {
    where: { id: movieId }
  })
}

module.exports = {
    getAllMovies,
    updateRating
};
