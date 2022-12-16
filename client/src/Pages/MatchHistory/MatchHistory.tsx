import React, { ReactElement, useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import { Match, matches, Participant } from '../../dummy_data/matches';
import { supabase } from '../../services/supabase';
import type { matchesData } from '../../types/databaseTypes';

const MatchHistory = () => {
  const [matchData, setMatchData] = useState<matchesData[] | null>();

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase.from('matches').select('*');
    setMatchData(data);
  }
  const sortMatch = (match: any): JSX.Element => {
    let winTeam = new Array(5);
    let loseTeam = new Array(5);
    match.data.participants.map((player: any) => {
      let position = 0;
      switch (player.INDIVIDUAL_POSITION) {
        case 'TOP':
          position = 0;
          break;
        case 'JUNGLE':
          position = 1;
          break;
        case 'MIDDLE':
          position = 2;
          break;
        case 'BOTTOM':
          position = 3;
          break;
        case 'UTILITY':
          position = 4;
          break;
        default:
          break;
      }
      if (player.WIN === 'Win') {
        winTeam[position] = player;
      } else if (player.WIN === 'Fail') {
        loseTeam[position] = player;
      }
    });
    return (
      <div className="flex flex-row justify-around items-center p-5 my-2 bg-[#E4E4E4] w-3/4 h-28 mx-auto">
        <div className="flex flex-row">
          {winTeam.map((player) => (
            <div className="flex flex-col items-center mx-7 mt-1">
              <img
                src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${player.SKIN.toLowerCase()}.png`}
                className="rounded-full w-12 h-12"
              ></img>
              <div className="w-16 mt-1 flex items-center justify-center text-xs tracking-tight font-bold">
                {player.NAME}
              </div>
            </div>
          ))}
        </div>
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-blue-800">1</span>-0
        </div>
        <div className="flex flex-row">
          {loseTeam.map((player) => (
            <div className="flex flex-col items-center mx-7 mt-1">
              <img
                src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${player.SKIN.toLowerCase()}.png`}
                className="rounded-full w-12 h-12"
              ></img>
              <div className="w-16 mt-1 flex items-center justify-center text-xs tracking-tight font-bold">
                {player.NAME}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
