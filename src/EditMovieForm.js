import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [image, setImage] = useState(movie.image);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();
  const editMovie = () => {
    const updatedMovie = {
      name: name,
      rating: rating,
      image: image,
      summary: summary,
      trailer: trailer,
    };
    fetch(`https://6278ea10d00bded55ae0fd07.mockapi.io/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };
  return (
    <div className="moviesContainer">
      <section className="addMoviesContainer">
        <TextField
          value={name}
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)}
          size="small"
        />
        <TextField
          value={image}
          label="Poster"
          variant="outlined"
          onChange={(event) => setImage(event.target.value)}
          size="small"
        />
        <TextField
          value={rating}
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
          size="small"
        />
        <TextField
          value={summary}
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)}
          size="small"
        />
        <TextField
          value={trailer}
          label="Trailer"
          variant="outlined"
          onChange={(event) => setTrailer(event.target.value)}
          size="small"
        />
        <Button variant="contained" color="success" onClick={() => editMovie()}>
          Save
        </Button>
      </section>
    </div>
  );
}
