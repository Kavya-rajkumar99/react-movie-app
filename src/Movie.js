import { useState } from "react";
import { Counter } from "./Counter";


export function Movie({ name, rating, image, summary }) {
  const [toggle, setToggle] = useState(true);
  const styles = {
    color: rating > 8 ? "green" : "red"
  };
  const paraStyle = {
    display: toggle ? "block" : "none"
  };

  return (
    <div className="movie-container">
      <img className="movie-post" src={image} alt={name} />
      <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <p style={styles} className="movie-rating">⭐ {rating}</p>
      </div>
      <button className="toggle-button" onClick={() => setToggle(!toggle)}>{toggle ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</button>
      <p style={paraStyle} className="movie-summary">{summary}</p>
      {/* {toggle? <p className="movie-summary">{summary}</p> : null} */}
      <Counter />
    </div>
  );
}

