import { Movie } from './Movie';
import { useState } from "react";

export function AddMovies({ movies }) {
  const [moviename, setMovieName] = useState("");
  const [movieposter, setMoviePoster] = useState("");
  const [movierating, setMovieRating] = useState("");
  const [moviesummary, setMovieSummary] = useState("");

  const [moviesList, setMoviesList] = useState(movies);
  const movie = {
    name: moviename,
    rating: movierating,
    image: movieposter,
    summary: moviesummary
  };
  function checkMovie(){
    if(movie.name!="" && movie.rating!="" && movie.image!="" && movie.summary!=""){
      setMoviesList([...moviesList, movie])
    }
  }
  return (
    <div>
      <section className="addMoviesContainer">
        <input type="text" onChange={(event) => setMovieName(event.target.value)} placeholder="Name" />
        <input type="text" onChange={(event) => setMoviePoster(event.target.value)} placeholder="Poster" />
        <input type="text" onChange={(event) => setMovieRating(event.target.value)} placeholder="Rating" />
        <input type="text" onChange={(event) => setMovieSummary(event.target.value)} placeholder="Summary" />
        {/* <button type="submit" onClick={() => setMoviesList([...moviesList, movie])}>Add Movie</button> */}
        <button type="submit" onClick={() => checkMovie()}>Add Movie</button>
      </section>
      <div className="movie-list">
        {moviesList.map((movie) => <Movie name={movie.name} rating={movie.rating} image={movie.image} summary={movie.summary} />)}
      </div>
    </div>
  );
}
