import { FunctionComponent } from 'react';

type PlayerProps = {
  id: number;
  name: string;
  games_won: number;
  games_played: number;
};

export type PlayerRowComponent = FunctionComponent<PlayerProps>;
