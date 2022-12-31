import React from 'react';
import { Link } from 'react-router-dom';
import { matchesData } from '../../types/databaseTypes';
import { Participant } from '../../types/schema';

import Team from './Team';

export const sortMatch = (match: matchesData): React.ReactElement => {
  const sortTeam = (team: Participant[]) => {
    let returnTeam = new Array<Participant>(5);
    team.map((player: Participant) => {
      let position = 0;
      switch (player.INDIVIDUAL_POSITION) {
        case 'TOP':
          position = 0;
          break;
        case 'JUNGLE':
          position = 1;
          break;
        case 'MIDDLE':
          position = 2;
          break;
        case 'BOTTOM':
          position = 3;
          break;
        case 'UTILITY':
          position = 4;
          break;
        default:
          break;
      }
      returnTeam[position] = player;
    });
    return returnTeam;
  };
  const displayWinningScore = () => {
    return (
      <div className="text-2xl font-bold tracking-wide">
        {match.data.participants[0].WIN === 'Win' ? (
          <span>
            <span className="text-blue-800">1</span>-0
          </span>
        ) : (
          <span>
            0-<span className="text-blue-800">1</span>
          </span>
        )}
      </div>
    );
  };

  const team1 = sortTeam(match.data.participants.slice(0, 5));
  const team2 = sortTeam(match.data.participants.slice(5));

  return (
    <Link
      className="flex flex-row justify-around items-center p-5 my-2 bg-[#E4E4E4] w-3/4 h-28 mx-auto"
      to={`/match/${match.id}`}
    >
      <Team team={team1} />
      {displayWinningScore()}
      <Team team={team2} />
    </Link>
  );
};
