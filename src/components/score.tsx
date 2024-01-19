import type { ScoreProps } from '../utils/types';
import '../styles/score.sass';

export default function Score({ bestScore, currentScore }: ScoreProps) {
  return (
    <div className="score">
      <span className="score__best">Best: {bestScore}</span>
      <span className="score__current">Score: {currentScore}</span>
    </div>
  );
}
