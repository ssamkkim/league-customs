import React from 'react';
import { players } from '../../dummy_data/players';

import { Participant } from '../../types/schema';
import { LeftTeamComponent } from './types';

const LeftTeam: LeftTeamComponent = ({ team }) => {
  return (
    <>
      {team.map((player: Participant) => (
        <div className="flex flex-col border border-l-0 border-solid border-[#D6D6D6] ">
          <div className="pt-1 px-4 font-bold text-base tracking-wide">
            {player.NAME}
          </div>
          <div className="flex flex-row items-center">
            <img
              src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${player.SKIN.toLowerCase()}.png`}
              className="rounded-full w-12 h-12 mx-4 my-1 border-hidden border-4"
            ></img>
            <div className="mb-1 tracking-wide text-sm">
              <div>{`KDA: ${player.CHAMPIONS_KILLED}/${player.NUM_DEATHS}/${player.ASSISTS}`}</div>
              <div>{`CS: ${
                Number(player.MINIONS_KILLED) +
                Number(player.NEUTRAL_MINIONS_KILLED)
              }`}</div>
              <div>{`Gold: ${Intl.NumberFormat('en-US').format(
                Number(player.GOLD_EARNED)
              )}`}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftTeam;
