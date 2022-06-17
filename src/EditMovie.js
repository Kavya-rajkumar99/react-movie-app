import { EditMovieForm } from "./EditMovieForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

export function EditMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = () => {
    fetch(`https://6278ea10d00bded55ae0fd07.mockapi.io/movies/${id}`, {
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
