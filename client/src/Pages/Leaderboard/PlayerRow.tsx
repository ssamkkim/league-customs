import React from 'react';
import { Link } from 'react-router-dom';

import { PlayerRowComponent } from './types';

const PlayerRow: PlayerRowComponent = ({
  rank,
  name,
  games_played,
  games_won,
  lp,
}) => {
  const games_lost = games_played - games_won;
  return (
    <Link
      to={`/player/${name}`}
      className="table-row font-sans text-white border border-collapse border-[#1C1C1F] bg-[#7B7A8E] hover:bg-[#31313C]"
    >
      <td className="py-4 px-5">{rank}</td>
      <td className="my-4 mr-10">
        <div className="w-full h-full">{name}</div>
      </td>
      <td className="py-4 px-5">{lp}</td>
      <td className="py-4 px-5">
        {`${((games_won / games_played) * 100).toFixed(0)}%`}
      </td>
      <td className="py-4 px-5">{`${games_won}W ${games_lost}L`}</td>
      <td className="py-4 px-5">{games_played}</td>
    </Link>
  );
};

export default PlayerRow;
