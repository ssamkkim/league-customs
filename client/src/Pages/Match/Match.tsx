import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { supabase } from '../../services/supabase';
import type { matchesData } from '../../types/databaseTypes';
import { Participant } from '../../types/schema';
import MatchTeam from './MatchTeam';

const Match = () => {
  const [match, setMatch] = useState<matchesData[] | null>();
  const { id } = useParams();

  useEffect(() => {
    fetchMatch();
  }, []);

  async function fetchMatch() {
    const { data, error } = await supabase
      .from('matches')
      .select('*')
      .eq('id', id);
    setMatch(data);
  }

  const displayMatch = () => {
    if (match && match.length >= 0) {
      const team1 = match[0].data.participants.slice(0, 5);
      const team2 = match[0].data.participants.slice(5);
      return (
        <div>
          <MatchTeam team={team1} />
          <MatchTeam team={team2} />
        </div>
      );
    }
  };

  return (
    <div className="bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      {displayMatch()}
    </div>
  );
};

export default Match;
