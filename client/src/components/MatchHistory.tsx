import React, { ReactElement } from 'react';

import { Match, matches, Participant } from '../Matches';
import Navbar from './Navbar';

const MatchHistory = () => {
  const sortMatch = (match: Match): JSX.Element => {
    let winTeam = new Array<Participant>(5);
    let loseTeam = new Array<Participant>(5);
    match.participants.map((player: Participant) => {
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
      <div className="flex flex-row py-5 bg-[#E4E4E4]">
        {winTeam.map((player) => (
          <div className="mx-5">{player.NAME}</div>
        ))}
        <div>-</div>
        {loseTeam.map((player) => (
          <div className="mx-5">{player.NAME}</div>
        ))}
      </div>
    );
  };

  const renderMatches = () => {
    return matches.map((match) => sortMatch(match));
  };

  return (
    <div className="bg-[#F2F2F2] h-screen">
      <Navbar />
      <h1 className="flex justify-center mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        Match History
      </h1>
      <div className="flex flex-col items-center">{renderMatches()}</div>
    </div>
  );
};

export default MatchHistory;
