import type Pokemon from './pokemon';

export type ScoreProps = {
  bestScore: number;
  currentScore: number;
};

export type CardProps = {
  pokemon: Pokemon;
  bestScore: number;
  setBestScore: React.Dispatch<React.SetStateAction<number>>;
  currentScore: number;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
  caughtPokemonNames: string[];
  setCaughtPokemonNames: React.Dispatch<React.SetStateAction<string[]>>;
  setRoundPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

export type PokemonData = {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
};
