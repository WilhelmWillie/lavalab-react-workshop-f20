import React, { useEffect, useState, useCallback } from 'react';

function Player(props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (score >= 10) {
      props.declareWinner(props.label);
    }
  }, [score, props.label]);

  const handleClick = useCallback(() => {
    setScore(score + 1);
  }, [score]);

  return (
    <div>
      <h1>{props.label}</h1>

      <p>Score: {score}</p>

      <button onClick={handleClick}>Add Point</button>
    </div>
  )
}

function App() {
  const [winner, setWinner] = useState(null);

  const declareWinner = useCallback((winnerLabel) => {
    setWinner(winnerLabel);
  }, []);

  return (
    <div>
      {winner ? <p>Winner: {winner}</p> : null}

      <Player label="Player 1" declareWinner={declareWinner} />
      <Player label="Player 2" declareWinner={declareWinner} />
    </div>
  );
}

export default App;
