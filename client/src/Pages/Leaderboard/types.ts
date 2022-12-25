import { FunctionComponent } from 'react';

type PlayerProps = {
  rank: number;
  name: string;
  games_won: number;
  games_played: number;
  lp: number;
};

export type PlayerRowComponent = FunctionComponent<PlayerProps>;
