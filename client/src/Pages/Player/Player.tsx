import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { supabase } from '../../services/supabase';
import type { playerData } from '../../types/databaseTypes';
import { findLP } from '../../utils/utils';

const Player = () => {
  const [player, setPlayer] = useState<playerData[] | null>();
  const { name } = useParams();

  useEffect(() => {
    fetchPlayer();
  }, []);

  async function fetchPlayer() {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('name', name);
    setPlayer(data);
  }

  return (
    <div className="flex items-center flex-col bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      <h1 className="mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        {name}
      </h1>
      {player && player.length >= 0 ? <div>{findLP(player[0])}</div> : null}
    </div>
  );
};

export default Player;
