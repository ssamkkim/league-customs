import React, { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

import { players } from '../../dummy_data/players';
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
          <td className="py-4 px-5">Win - Loss</td>
          <td className="py-4 px-5">Games Played</td>
        </tr>
        {playerData && playerData.length
          ? playerData.map((player) => <PlayerRow props={player} />)
          : null}
      </table>
    </div>
  );
};

export default Leaderboard;
