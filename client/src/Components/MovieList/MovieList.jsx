import MovieItem from "../MovieItem/MovieItem";
import {useEffect, useState} from "react";
import {fetchMovies} from "../../Services/MovieService";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const updateMovies = () => {
      fetchMovies().then(fetchedMovies => {
        setMovies(fetchedMovies);
    });
    }
    useEffect(() => {
      updateMovies();
    }, []);
    return <div>
        {movies.map((movie) => {
            return <MovieItem img={movie.img} title={movie.title} year={movie.year} synopsis={movie.synopsis}
                              id={movie.id} key={movie.title} rating={movie.rating}
                              updateMovies={updateMovies}/>;
        })
        }
    </div>;
};
