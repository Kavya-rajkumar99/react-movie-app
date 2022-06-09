import { useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="button-container">
      {/* <button className="like-button" onClick={() => setLike(like + 1)}>👍{like}</button>  */}
      {/* <button className="dislike-button" onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
      <IconButton className="like-button" color="success" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="success">
          <span className="like-button">👍</span>
        </Badge>
      </IconButton>
      <IconButton className="dislike-button" color="error" onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">
          <span className="dislike-button">👎</span>
        </Badge>
      </IconButton>

    </div>
  );
}
