import { useState, useEffect } from 'react';
import type { PokemonData } from './utils/types';
import { ROUND_CARDS_AMOUNT, POKEAPI_URL } from './utils/constants';
import getPokemonNamesForRound from './utils/getPokemonNamesForRound';
import Pokemon from './utils/pokemon';
import Score from './components/score';

export default function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [roundPokemons, setRoundPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (roundPokemons.length) {
      return;
    }

    const controllers: AbortController[] = new Array(ROUND_CARDS_AMOUNT).fill(
      new AbortController()
    );

    const roundNames = getPokemonNamesForRound();
    const _roundPokemons: Pokemon[] = [];

    roundNames.forEach(async (name, i) => {
      const signal = controllers[i].signal;
      const response = await fetch(POKEAPI_URL + name, { signal });
      const data: PokemonData = await response.json();
      const imgSrc = data.sprites.other['official-artwork'].front_default;

      _roundPokemons.push(new Pokemon(name, imgSrc));

      if (_roundPokemons.length === ROUND_CARDS_AMOUNT) {
        setRoundPokemons(_roundPokemons);
      }
    });

    return () => controllers.forEach((c) => c.abort());
  }, [roundPokemons]);

  return (
    <>
      <Score bestScore={bestScore} currentScore={currentScore} />
    </>
  );
}
