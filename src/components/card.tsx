import type { CardProps } from '../utils/types';
import { POKEMON_NAMES } from '../utils/constants';
import capitalize from '../utils/capitalize';
import '../styles/card.sass';

const MAX_SCORE = POKEMON_NAMES.length;

export default function Card({
  pokemon,
  bestScore,
  setBestScore,
  currentScore,
  setCurrentScore,
  caughtPokemonNames,
  setCaughtPokemonNames,
  setRoundPokemons
}: CardProps) {
  const onClick = (name: string) => {
    if (caughtPokemonNames.includes(name)) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }

      setCurrentScore(0);
      setCaughtPokemonNames([]);
    } else {
      if (currentScore === MAX_SCORE - 1) {
        setBestScore(MAX_SCORE);
        setCurrentScore(0);
        setCaughtPokemonNames([]);
        alert('You win!');
      } else {
        setCaughtPokemonNames((prevNames) => [...prevNames, name]);
        setCurrentScore((prevScore) => prevScore + 1);
      }
    }

    setRoundPokemons([]);
  };

  return (
    <button
      type="button"
      className="card"
      onClick={() => onClick(pokemon.name)}
      key={pokemon.name}
    >
      <img src={pokemon.imgSrc} alt="" className="card__img" />
      <span className="card__txt">{capitalize(pokemon.name)}</span>
    </button>
  );
}
