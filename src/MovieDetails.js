import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import {API} from './global';
export function MovieDetails() {
  const { id } = useParams();
  // const movie = moviesList[id];
  const [movie, setMovie] = useState({});
  const getMovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((movie) => setMovie(movie));
  };
  useEffect(() => getMovie(), []);
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="350"
        src={movie.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="movie-details-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <div className="detailsPageButton">
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
