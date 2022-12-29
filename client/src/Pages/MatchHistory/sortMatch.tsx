import React from 'react';
import { Link } from 'react-router-dom';
import { matchesData } from '../../types/databaseTypes';
import { Participant } from '../../types/schema';

import Team from './Team';

export const sortMatch = (match: matchesData): React.ReactElement => {
  let winTeam = new Array<Participant>(5);
  let loseTeam = new Array<Participant>(5);
  match.data.participants.map((player: Participant) => {
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
    if (player.WIN === 'Win') {
      winTeam[position] = player;
    } else if (player.WIN === 'Fail') {
      loseTeam[position] = player;
    }
  });
  return (
    <Link
      className="flex flex-row justify-around items-center p-5 my-2 bg-[#E4E4E4] w-3/4 h-28 mx-auto"
      to={`/match/${match.id}`}
    >
      <Team players={winTeam} />
      <div className="text-2xl font-bold tracking-wide">
        <span className="text-blue-800">1</span>-0
      </div>
      <Team players={loseTeam} />
    </Link>
  );
};
