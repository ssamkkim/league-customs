import React from 'react';

import { Participant } from '../../types/schema';
import LeftTeam from './LeftTeam';
import RightTeam from './RightTeam';
import { MatchTeamComponent } from './types';

const MatchTeam: MatchTeamComponent = ({ team, isLeft }) => {
  return (
    <div className="flex flex-col grow w-full">
      {isLeft ? <LeftTeam team={team} /> : <RightTeam team={team} />}
    </div>
  );
};

export default MatchTeam;
