import { FunctionComponent } from 'react';

import { Participant } from '../../types/schema';

type Team = {
  team: Participant[];
};

export type MatchTeamComponent = FunctionComponent<Team>;
