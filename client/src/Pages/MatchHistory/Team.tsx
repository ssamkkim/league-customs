import React from 'react';
import { Participant } from '../../types/schema';
import { TeamComponent } from './types';

const Team: TeamComponent = ({ team }) => {
  return (
    <div className="flex flex-col xl:flex-row">
      {team.map((player: Participant) => (
        <div className="flex flex-col items-center mx-7 mt-1">
          <img
            src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${player.SKIN.toLowerCase()}.png`}
            className="rounded-full w-12 h-12"
          ></img>
          <div className="w-16 mb-1 mt-1 xl:mb-0 flex items-center justify-center text-xs tracking-tight font-bold whitespace-nowrap">
            {player.NAME}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
