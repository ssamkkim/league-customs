import React from 'react';

import { players } from '../Players';

const Leaderboard = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        Leaderboard
      </h1>
      <table className="border border-collapse border-black">
        <tr className="font-bold tracking-wide border border-collapse border-black uppercase">
          <td className="py-4 px-5">#</td>
          <td className="py-4 px-5">Player</td>
          <td className="py-4 px-5">Win Rate</td>
          <td className="py-4 px-5">Games Played</td>
          <td className="py-4 px-5">Tier</td>
          <td className="py-4 px-5">op.gg</td>
        </tr>
        {players.map((player) => (
          <tr className="font-sans border border-collapse border-black">
            <td className="py-4 px-5">{player.rank}</td>
            <td className="py-4 px-5">{player.name}</td>
            <td className="py-4 px-5">{player.winRate}%</td>
            <td className="py-4 px-5">{player.gamesPlayed}</td>
            <td className="py-4 px-5">{player.tier}</td>
            <td className="py-4 px-5">
              <a href={player.playerLink} target="_blank">
                {player.inGameName}
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Leaderboard;
