import { useState } from "react";

export function AddMovies({ moviesList,setMoviesList }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");

  // const [moviesList, setMoviesList] = useState(movies);
  const movie = {
    name: movieName,
    rating: movieRating,
    image: moviePoster,
    summary: movieSummary
  };
  function checkMovie(){
    if(movie.name!=="" && movie.rating!=="" && movie.image!=="" && movie.summary!==""){
      setMoviesList([...moviesList, movie])
      setMovieName("");
      setMoviePoster("");
      setMovieRating("");
      setMovieSummary("");
    }
  }
  return (
    <div>
      <section className="addMoviesContainer">
        <input type="text" value={movieName} onChange={(event) => setMovieName(event.target.value)} placeholder="Name" />
        <input type="text" value={moviePoster}onChange={(event) => setMoviePoster(event.target.value)} placeholder="Poster" />
        <input type="text" value={movieRating}onChange={(event) => setMovieRating(event.target.value)} placeholder="Rating" />
        <input type="text" value={movieSummary}onChange={(event) => setMovieSummary(event.target.value)} placeholder="Summary" />
        {/* <button type="submit" onClick={() => setMoviesList([...moviesList, movie])}>Add Movie</button> */}
        <button type="submit" onClick={() => checkMovie()}>Add Movie</button>
      </section>
      {/* <div className="movie-list">
        {moviesList.map((movie) => <Movie name={movie.name} rating={movie.rating} image={movie.image} summary={movie.summary} />)}
      </div> */}
    </div>
  );
}

