import { useState } from "react";
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="button-container">
       {/* <button className="like-button" onClick={() => setLike(like + 1)}>👍{like}</button>  */}
      {/* <span class="MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight css-1rtk2m2">{like}</span> */}
      {/* <button className="dislike-button" onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
      {/* <button className="like-button" onClick={() => setLike(like + 1)}>👍<span class="MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight css-1rtk2m2">{like}</span></button> */}
      {/* <Badge color="success" badgeContent={like} onClick={() => setLike(like + 1)}>
       👍
      </Badge> */}
      <Badge color="success" badgeContent={like} onClick={() => setLike(like + 1)}>
       <span className="like-button">👍</span>
      </Badge>
      <Badge color="error" badgeContent={dislike} onClick={() => setDislike(dislike + 1)}>
      <span className="dislike-button">👎</span>
      </Badge>
    </div>
  );
}
