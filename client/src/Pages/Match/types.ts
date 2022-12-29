import { FunctionComponent } from 'react';

import { Participant } from '../../types/schema';

export type Team = {
  team: Participant[];
};

export type MatchTeamComponent = FunctionComponent<Team>;
