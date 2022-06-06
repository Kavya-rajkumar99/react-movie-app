import { Movie } from './Movie';

export function RenderMovies({ moviesList }) {
  return (
    <div className="movie-list">
      {moviesList.map((movie) => <Movie key={movie.name} name={movie.name} rating={movie.rating} image={movie.image} summary={movie.summary} />)}
    </div>
  );

}
