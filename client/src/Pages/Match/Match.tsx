import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { supabase } from '../../services/supabase';
import type { matchesData } from '../../types/databaseTypes';

const Match = () => {
  const [match, setMatch] = useState<matchesData[] | null>();
  const { id } = useParams();

  // useEffect(() => {
  //   fetchMatch();
  // }, []);

  // async function fetchMatch() {
  //   const { data, error } = await supabase
  //     .from('matches')
  //     .select('*')
  //     .eq('data->matchId', id);
  //   setMatch(data);
  // }
  return (
    <div className="bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
    </div>
  );
};

export default Match;
