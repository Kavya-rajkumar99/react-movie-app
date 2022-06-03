import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="button-container">
      <button className="like-button" onClick={() => setLike(like + 1)}>👍{like}</button>
      <button className="dislike-button" onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}
