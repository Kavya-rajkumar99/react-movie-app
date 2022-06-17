import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export function Movie({ movie, id, deleteButton, editButton }) {
  const [toggle, setToggle] = useState(true);
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  const paraStyle = {
    display: toggle ? "block" : "none",
  };
  const navigate = useNavigate();
  return (
    <Card className="movie-container" sx={{ height: "min-content" }}>
      <img className="movie-post" src={movie.image} alt={movie.name} />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {movie.name}{" "}
            <IconButton color="primary" onClick={() => setToggle(!toggle)}>
              {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              color="primary"
              onClick={() => navigate(`/movies/${id}`)}
            >
              <InfoIcon />
            </IconButton>
          </h3>
          <p style={styles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>
        <p style={paraStyle} className="movie-summary">
          {movie.summary}
        </p>
      </CardContent>
      <CardActions>
        <Counter />
        {editButton} {deleteButton}
      </CardActions>
      {/* <button className="toggle-button" onClick={() => setToggle(!toggle)}>{toggle ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</button> */}
      {/* <button onClick={()=>navigate(`/movies/${id}`)}></button> */}
      {/* {toggle? <p className="movie-summary">{summary}</p> : null} */}
    </Card>
  );
}
