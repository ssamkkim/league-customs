import React, { useEffect, useState } from 'react';

import { supabase } from '../../services/supabase';
import type { playerData } from '../../types/databaseTypes';
import PlayerRow from './PlayerRow';

const Leaderboard = () => {
  const [playerData, setPlayerData] = useState<playerData[] | null>();

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase.from('players').select('*');
    setPlayerData(data);
    console.log(data);
  }

  const compare = (a: playerData, b: playerData) => {
    const a_lp = findLP(a);
    const b_lp = findLP(b);
    if (a_lp > b_lp) {
      return -1;
    }
    if (a_lp < b_lp) {
      return 1;
    } else {
      return 0;
    }
  };

  const findLP = (p: playerData) => {
    return 1000 + 10 * p.games_won - 5 * findGamesLost(p);
  };

  const findGamesLost = (p: playerData) => {
    return p.games_played - p.games_won;
  };

  return (
    <div className="flex items-center flex-col">
      <h1 className="mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        Leaderboard
      </h1>
      <table className="border border-collapse border-[#1C1C1F]">
        <tr className="font-medium tracking-wide border border-collapse border-[#1C1C1F] bg-[#31313C] text-gray-300">
          <td className="py-4 px-5">#</td>
          <td className="py-4 pr-32">Player</td>
          <td className="py-4 px-5">LP</td>
          <td className="py-4 px-5">Win Rate</td>
          <td className="py-4 px-5">Win - Loss</td>
          <td className="py-4 px-5">Games Played</td>
        </tr>
        {playerData && playerData.length
          ? playerData
              .sort(compare)
              .map((player, rank) => (
                <PlayerRow
                  rank={rank}
                  name={player.name}
                  games_won={player.games_won}
                  games_played={player.games_played}
                  lp={findLP(player)}
                />
              ))
          : null}
      </table>
    </div>
  );
};

export default Leaderboard;
