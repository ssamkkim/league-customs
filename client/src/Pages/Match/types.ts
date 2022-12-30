import { FunctionComponent } from 'react';

import { Participant } from '../../types/schema';

export type Team = {
  team: Participant[];
  isLeft?: boolean;
};

export type MatchTeamComponent = FunctionComponent<Team>;
export type LeftTeamComponent = FunctionComponent<Team>;
export type RightTeamComponent = FunctionComponent<Team>;
