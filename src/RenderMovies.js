import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "./Movie";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import {API} from './global'

export function RenderMovies() {
  const [moviesList, setMoviesList] = useState([]);
  const navigate = useNavigate();
  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movies) => setMoviesList(movies));
  };
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };
  useEffect(() => getMovies(), []);
  return (
    <div className="movie-list">
      {moviesList.map((movie, index) => (
        <Movie
          key={movie._id}
          movie={movie}
          id={movie._id}
          deleteButton={
            <IconButton onClick={() => deleteMovie(movie._id)} color="error">
              <DeleteIcon color="error"></DeleteIcon>
            </IconButton>
          }
          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => navigate(`/movies/edit/${movie._id}`)}
              color="secondary"
            >
              <EditIcon color="secondary" />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
