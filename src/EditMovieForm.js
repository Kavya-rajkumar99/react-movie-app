import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import {movieValidationSchema} from './AddMovies';

export function EditMovieForm({ movie }) {
  const {values,handleSubmit,errors,touched,handleBlur,handleChange} = useFormik({
    initialValues: {
      name: movie.name,
      rating: movie.rating,
      image: movie.image,
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
          value={values.image}
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"
          size="small"
          error={touched.image && errors.image}
          helperText={touched.image && errors.image ?errors.image : ""}
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
