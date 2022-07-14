import { EditMovieForm } from "./EditMovieForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import {API} from './global';

export function EditMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movie) => setMovie(movie));
  };
  useEffect(() => getMovie(), []);
  return movie ? (
    <EditMovieForm movie={movie} />
  ) : (
    <div className="progress">
      <CircularProgress />
    </div>
  );
}
