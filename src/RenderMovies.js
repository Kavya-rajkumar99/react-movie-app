import { Movie } from './Movie';

export function RenderMovies({ moviesList }) {
  return (
    <div className="movie-list">
      {moviesList.map((movie,index) => <Movie key={index} name={movie.name} rating={movie.rating} image={movie.image} summary={movie.summary} trailer ={movie.trailer} id={index} />)}
    </div>
  );

}
