import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import { Match, matches, Participant } from '../../dummy_data/matches';
import { supabase } from '../../services/supabase';
import type { matchesData } from '../../types/databaseTypes';
import { sortMatch } from './sortMatch';

const MatchHistory: React.FC = () => {
  const [matchData, setMatchData] = useState<matchesData[] | null>();

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase.from('matches').select('*');
    setMatchData(data);
  }

  const renderMatches = () => {
    if (matchData && matchData.length > 0) {
      return matchData.map((match) => sortMatch(match));
    }
  };

  return (
    <div className="bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      <div className="flex flex-col ">
        <h1 className="flex justify-center mb-5 font-sans text-4xl font-bold tracking-wider text-left">
          Match History
        </h1>
        <div className="flex flex-col items-center">{renderMatches()}</div>
      </div>
    </div>
  );
};

export default MatchHistory;
