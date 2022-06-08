import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovies({ moviesList,setMoviesList }) {
  const [movieName, setMovieName] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieSummary, setMovieSummary] = useState("");
  const [movieTrailer, setMovieTrailer] = useState("");

  // const [moviesList, setMoviesList] = useState(movies);
  const movie = {
    name: movieName,
    rating: movieRating,
    image: moviePoster,
    summary: movieSummary,
    trailer : movieTrailer

  };
  function checkMovie(){
    if(movie.name!=="" && movie.rating!=="" && movie.image!=="" && movie.summary!=="" && movie.trailer!==""){
      setMoviesList([...moviesList, movie])
      setMovieName("");
      setMoviePoster("");
      setMovieRating("");
      setMovieSummary("");
      setMovieTrailer("");
    }
  }
  return (
    <div className = "moviesContainer">
      <section className="addMoviesContainer">
        {/* <input type="text" value={movieName} onChange={(event) => setMovieName(event.target.value)} placeholder="Name" /> */}
        {/* <input type="text" value={moviePoster}onChange={(event) => setMoviePoster(event.target.value)} placeholder="Poster" /> */}
        {/* <input type="text" value={movieRating}onChange={(event) => setMovieRating(event.target.value)} placeholder="Rating" /> */}
        {/* <input type="text" value={movieSummary}onChange={(event) => setMovieSummary(event.target.value)} placeholder="Summary" /> */}
        <TextField label="Name" value={movieName} onChange={(event) => setMovieName(event.target.value)} variant="outlined" size="small" />
        <TextField label="Poster" value={moviePoster} onChange={(event) => setMoviePoster(event.target.value)} variant="outlined" size="small" />
        <TextField label="Rating" value={movieRating} onChange={(event) => setMovieRating(event.target.value)} variant="outlined" size="small" />
        <TextField label="Summary" value={movieSummary} onChange={(event) => setMovieSummary(event.target.value)} variant="outlined" size="small" />
        <TextField label="Trailer" value={movieTrailer} onChange={(event) => setMovieTrailer(event.target.value)} variant="outlined" size="small" />
        {/* <button type="submit" onClick={() => setMoviesList([...moviesList, movie])}>Add Movie</button> */}
        {/* <button type="submit" onClick={() => checkMovie()}>Add Movie</button> */}
        <Button variant="contained" onClick={() => checkMovie()}>Add Movie</Button>
      </section>
      {/* <div className="movie-list">
        {moviesList.map((movie) => <Movie name={movie.name} rating={movie.rating} image={movie.image} summary={movie.summary} />)}
      </div> */}
    </div>
  );
}

