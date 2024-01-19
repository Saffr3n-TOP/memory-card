import { ROUND_CARDS_AMOUNT, POKEMON_NAMES } from './constants';
import randomInt from './randomInt';

export default function getPokemonNamesForRound() {
  const names: string[] = [];

  for (let i = 0; i < ROUND_CARDS_AMOUNT; i++) {
    const name = POKEMON_NAMES[randomInt(POKEMON_NAMES.length)];

    if (names.includes(name)) {
      i--;
      continue;
    }

    names.push(name);
  }

  return names;
}
