import React from 'react';

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
    <tr className="font-sans text-white border border-collapse border-[#1C1C1F] bg-[#7B7A8E] hover:bg-[#31313C]">
      <td className="py-4 px-5">{rank + 1}</td>
      <td className="my-4 mr-10">
        <a href={`https://www.op.gg/summoners/na/${name}`} target="_blank">
          <div className="w-full h-full">{name}</div>
        </a>
      </td>
      <td className="py-4 px-5">{lp}</td>
      <td className="py-4 px-5">
        {`${((games_won / games_played) * 100).toFixed(0)}%`}
      </td>
      <td className="py-4 px-5">{`${games_won}W ${games_lost}L`}</td>
      <td className="py-4 px-5">{games_played}</td>
    </tr>
  );
};

export default PlayerRow;
