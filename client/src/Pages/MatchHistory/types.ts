import { FunctionComponent } from 'react';

import { Participant } from '../../types/schema';

type Team = {
  players: Participant[];
};

export type TeamComponent = FunctionComponent<Team>;
