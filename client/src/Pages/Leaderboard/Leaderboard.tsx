import React from 'react';

import { players } from '../../dummy_data/players';
import PlayerRow from './PlayerRow';

const Leaderboard = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        Leaderboard
      </h1>
      <table className="border border-collapse border-[#1C1C1F]">
        <tr className="font-medium tracking-wide border border-collapse border-[#1C1C1F] bg-[#31313C] text-gray-300">
          <td className="py-4 px-5">#</td>
          <td className="py-4 pr-32">Player</td>
          <td className="py-4 px-5">Win Rate</td>
          <td className="py-4 px-5">Games Played</td>
          <td className="py-4 px-5">Tier</td>
        </tr>
        {players.map((player) => (
          <PlayerRow props={player} />
        ))}
      </table>
    </div>
  );
};

export default Leaderboard;
