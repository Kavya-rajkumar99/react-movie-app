export function GameBox({ index, val, onPlayerClick, winningLine }) {
  // const [a,b,c] = winningLine
  const styles = {
    color: val === "X" ? "green" : "red",
    borderLeft:
      index === 0 || index === 3 || index === 6 ? "none" : "3px solid purple",
    borderRight:
      index === 2 || index === 5 || index === 8 ? "none" : "3px solid purple",
    borderTop:
      index === 0 || index === 1 || index === 2 ? "none" : "3px solid purple",
    borderBottom:
      index === 6 || index === 7 || index === 8 ? "none" : "3px solid purple",
    // boxShadow: index===a||index===b||index===c?"rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none"
  };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}
