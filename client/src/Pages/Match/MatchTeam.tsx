import React from 'react';

import { Participant } from '../../types/schema';
import { MatchTeamComponent } from './types';

const MatchTeam: MatchTeamComponent = ({ team, isLeft }) => {
  return (
    <div className="flex flex-col">
      {team.map((player: Participant) => (
        <div className="flex flex-row items-center mx-7 mb-7">
          <img
            src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${player.SKIN.toLowerCase()}.png`}
            className="rounded-full w-16 h-16"
          ></img>
          <div className="w-16 mx-4 mt-1 flex items-center tracking-wide font-semibold">
            {player.NAME}
          </div>
          <div className="flex space-x-4">
            <div className="ml-20">{`${player.CHAMPIONS_KILLED}/${player.NUM_DEATHS}/${player.ASSISTS}`}</div>
            <div>
              {Number(player.MINIONS_KILLED) +
                Number(player.NEUTRAL_MINIONS_KILLED)}
            </div>
            <div>{player.GOLD_EARNED}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchTeam;
