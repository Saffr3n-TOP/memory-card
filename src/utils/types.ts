export type ScoreProps = {
  bestScore: number;
  currentScore: number;
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
