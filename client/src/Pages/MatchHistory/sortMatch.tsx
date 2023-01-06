import React from 'react';
import { Link } from 'react-router-dom';

import { matchesData } from '../../types/databaseTypes';
import { Participant } from '../../types/schema';
import { displayWinningScore, sortTeam } from '../../utils/utils';

import Team from './Team';

export const sortMatch = (match: matchesData): React.ReactElement => {
  const team1 = sortTeam(match.data.participants.slice(0, 5));
  const team2 = sortTeam(match.data.participants.slice(5));

  return (
    <Link
      className="flex flex-row justify-evenly items-center p-5 my-2 bg-[#E4E4E4] w-full sm:w-10/12 xl:w-full h-full 2xl:w-3/4 2xl:h-28 mx-auto hover:bg-[#D3D3D3]"
      to={`/match/${match.id}`}
    >
      <Team team={team1} />
      {displayWinningScore(match)}
      <Team team={team2} />
    </Link>
  );
};
