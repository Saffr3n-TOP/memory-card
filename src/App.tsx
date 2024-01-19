import { useState } from 'react';
import Score from './components/score';

export default function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <>
      <Score bestScore={bestScore} currentScore={currentScore} />
    </>
  );
}
