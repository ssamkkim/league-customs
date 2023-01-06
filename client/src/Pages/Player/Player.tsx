import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { supabase } from '../../services/supabase';
import type { matchesData, playerData } from '../../types/databaseTypes';
import { findLP } from '../../utils/utils';

const Player = () => {
  const [player, setPlayer] = useState<playerData[] | null>();
  // const [playerMatches, setPlayerMatches] = useState<matchesData[] | null>();
  // const [playerData, setPlayerData] = useState<playerData[] | null>();
  // const [rank, setRank] = useState<number>();
  const { name } = useParams();

  useEffect(() => {
    fetchPlayer();
  }, []);

  // useEffect(() => {
  //   fetchPlayerMatches();
  //   console.log(JSON.stringify(playerMatches));
  //   // console.log(playerMatches);
  // }, []);

  async function fetchPlayer() {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('name', name);
    setPlayer(data);
  }

  // async function fetchPlayerMatches() {
  //   const { data, error } = await supabase
  //     .from('matches')
  //     .select('*')
  //     .textSearch(name);
  //   setPlayerMatches(data);
  // }

  // async function fetchPlayers() {
  //   const { data, error } = await supabase.from('players').select('*');
  //   setPlayerData(data);
  //   if (playerData && playerData.length) {
  //     const sortedPlayers = playerData.sort(compare);
  //     sortedPlayers.find((player, index) => {
  //       if (player.name === name) {
  //         setRank(index + 1);
  //         console.log(rank);
  //       }
  //     });
  //   }
  // }

  return (
    <div className="flex items-center flex-col bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      <h1 className="mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        {name}
      </h1>
      {player && player.length >= 0 ? <div>{findLP(player[0])}</div> : null}
      {/* <div>{rank}</div> */}
    </div>
  );
};

export default Player;
