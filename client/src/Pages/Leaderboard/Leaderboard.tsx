import React from 'react';

import { players } from '../../dummy_data/players';

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
          <tr className="font-sans text-white border border-collapse border-[#1C1C1F] bg-[#7B7A8E] hover:bg-[#31313C]">
            <td className="py-4 px-5">{player.rank}</td>
            <td className="my-4 mr-10">
              <a
                href={`https://www.op.gg/summoners/na/${player.name}`}
                target="_blank"
              >
                <div className="w-full h-full">{player.name}</div>
              </a>
            </td>
            <td className="py-4 px-5">{player.winRate}%</td>
            <td className="py-4 px-5">{player.gamesPlayed}</td>
            <td className="py-4 px-5">{player.tier}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Leaderboard;
