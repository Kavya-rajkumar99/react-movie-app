import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import {movieValidationSchema} from './AddMovies';
import {API} from './global';

export function EditMovieForm({ movie }) {
  const {values,handleSubmit,errors,touched,handleBlur,handleChange} = useFormik({
    initialValues: {
      name: movie.name,
      rating: movie.rating,
      poster: movie.poster,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      console.log(updatedMovie);
      editMovie(updatedMovie);
    },
  });
  const navigate = useNavigate();
  const editMovie = (updatedMovie) => {
    fetch(`${API}/movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };
  return (
    <div className="moviesContainer">
      <form className="addMoviesContainer" onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained" color="success">
          Save
        </Button>
      </form>
    </div>
  );
}
