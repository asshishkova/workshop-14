export async function fetchMovies() {
    const data = await fetch('/movies')
    const movies = await data.json()
    return movies
}

export async function updateMovieRating(movieId, rating) {
  const updatedMovie = await fetch(`/movies/${movieId}`,
                      {method: 'POST',
                      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
                      body: JSON.stringify({rating: rating + 1})});
  return updatedMovie;
}
