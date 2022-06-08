import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export function Movie({ name, rating, image, summary,id }) {
  const [toggle, setToggle] = useState(true);
  const styles = {
    color: rating > 8 ? "green" : "red"
  };
  const paraStyle = {
    display: toggle ? "block" : "none"
  };
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img className="movie-post" src={image} alt={name} />
      <div className = "movie-info">
      <div className="movie-specs">
        <h2 className="movie-name">{name}</h2>
        <span><button className="toggle-button" onClick={() => setToggle(!toggle)}>{toggle ?<KeyboardArrowUpOutlinedIcon color="primary"></KeyboardArrowUpOutlinedIcon> : < KeyboardArrowDownOutlinedIcon color="primary"></KeyboardArrowDownOutlinedIcon>}</button></span><span><InfoOutlinedIcon color="primary" onClick={()=>navigate(`/movies/${id}`)}></InfoOutlinedIcon></span>
        <p style={styles} className="movie-rating">⭐ {rating}</p>
      </div>
      <p style={paraStyle} className="movie-summary">{summary}</p>
      <Counter />
      </div>
      {/* <button className="toggle-button" onClick={() => setToggle(!toggle)}>{toggle ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</button> */}
      {/* <button className="toggle-button" onClick={() => setToggle(!toggle)}>{toggle ?<KeyboardArrowUpOutlinedIcon color="primary"></KeyboardArrowUpOutlinedIcon> : < KeyboardArrowDownOutlinedIcon color="primary"></KeyboardArrowDownOutlinedIcon>}</button> */}
      {/* <button onClick={()=>navigate(`/movies/${id}`)}></button> */}
      {/* <span> </span> */}
        {/* <InfoOutlinedIcon color="primary" onClick={()=>navigate(`/movies/${id}`)}></InfoOutlinedIcon> */}
      
      {/* {toggle? <p className="movie-summary">{summary}</p> : null} */}
      {/* <Counter /> */}
    </div>
  );
}

