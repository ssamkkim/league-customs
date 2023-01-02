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
    <div className="bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/2">
          <div>{name}</div>
          {player && player.length >= 0 ? <div>{findLP(player[0])}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Player;
