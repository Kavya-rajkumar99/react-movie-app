import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from "./global";

export const movieValidationSchema = yup.object({
  name: yup.string().required("Please enter the movie name"),
  poster: yup
    .string()
    .required("Please enter the movie poster")
    .min(20, "Movie poster should have a minimum of 20 characters"),
  rating: yup
    .number()
    .required("Please enter the movie rating")
    .min(1, "Please enter a better rating")
    .max(10, "Please enter a rating between 1 and 10"),
  summary: yup
    .string()
    .required("Please enter the movie summary")
    .min(20, "Movie summary should have a minimum of 20 characters"),
  trailer: yup
    .string()
    .required("Please enter the movie trailer")
    .min(20, "Movie trailer should have a minimum of 20 characters"),
});

export function AddMovies() {
  const {values,handleSubmit,errors,touched,handleBlur,handleChange} = useFormik({
    initialValues: {
      name: "",
      rating: "",
      poster: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log(newMovie);
      addMovie(newMovie);
    },
  });

  const navigate = useNavigate();
  const addMovie = (newMovie) => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  return (
    <div className="moviesContainer">
      <form className="addMoviesContainer" onSubmit={handleSubmit}>
        {/* <input type="text" value={movieName} onChange={(event) => setMovieName(event.target.value)} placeholder="Name" /> */}
        {/* <input type="text" value={moviePoster}onChange={(event) => setMoviePoster(event.target.value)} placeholder="Poster" /> */}
        {/* <input type="text" value={movieRating}onChange={(event) => setMovieRating(event.target.value)} placeholder="Rating" /> */}
        {/* <input type="text" value={movieSummary}onChange={(event) => setMovieSummary(event.target.value)} placeholder="Summary" /> */}
        <TextField
          label="Name"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          size="small"
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : ""}
        />
        <TextField
          label="Poster"
          value={values.poster}
          name="poster"
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          size="small"
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster ?errors.poster : ""}
        />
        
        <TextField
          label="Rating"
          value={values.rating}
          name="rating"
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          size="small"
          error={touched.rating && errors.rating}
          helperText={touched.rating && errors.rating ? errors.rating : ""}
        />
        <TextField
          label="Summary"
          value={values.summary}
          name="summary"
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          size="small"
          error={touched.summary && errors.summary}
          helperText={touched.summary && errors.summary ?errors.summary : ""}
        />
        <TextField
          label="Trailer"
          value={values.trailer}
          name="trailer"
          onBlur={handleBlur}
          onChange={handleChange}
          variant="outlined"
          size="small"
          error={touched.trailer && errors.trailer}
          helperText={touched.trailer && errors.trailer ?errors.trailer : ""}
        />
        {/* <button type="submit" onClick={() => setMoviesList([...moviesList, movie])}>Add Movie</button> */}
        {/* <button type="submit" onClick={() => checkMovie()}>Add Movie</button> */}
        <Button type="submit" variant="contained">
          Add Movie
        </Button>
        {/* <p>{JSON.stringify(values)}</p>
        <p>{JSON.stringify(touched)}</p>
        <p>{JSON.stringify(errors)}</p> */}
      </form>
      {/* <div className="movie-list">
        {moviesList.map((movie) => <Movie name={movie.name} rating={movie.rating} poster={movie.poster} summary={movie.summary} />)}
      </div> */}
    </div>
  );
}
