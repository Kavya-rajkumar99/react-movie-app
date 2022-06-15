import { Movie } from './Movie';

export function RenderMovies({ moviesList,setMoviesList }) {
  return (
    <div className="movie-list">
      {moviesList.map((movie,index) => <Movie moviesList={moviesList} setMoviesList ={setMoviesList} key={index} movie={movie} id={index} />)}
    </div>
  );

}
