import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import { supabase } from '../../services/supabase';
import type { matchesData } from '../../types/databaseTypes';
import { Participant } from '../../types/schema';
import { displayWinningScore, sortTeam } from '../../utils/utils';
import MatchTeam from './MatchTeam';
import { Team } from './types';

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

  const displayMatchDuration = () => {
    if (match && match.length >= 0) {
      const minutes = Math.floor(match[0].data.gameDuration / 60000).toFixed();
      let seconds = '';
      const singleDigitSecond = String(
        (match[0].data.gameDuration % 60000).toFixed()
      ).substring(0, 1);
      if (Number(singleDigitSecond) === 0) {
        seconds = '0';
      } else if (Number(singleDigitSecond) >= 6) {
        seconds = singleDigitSecond;
      } else {
        seconds = String(
          (match[0].data.gameDuration % 60000).toFixed()
        ).substring(0, 1);
      }
      return <div>{`${minutes}m ${seconds}s`}</div>;
    }
  };

  const displayMatch = () => {
    if (match && match.length >= 0) {
      const team1 = sortTeam(match[0].data.participants.slice(0, 5));
      const team2 = sortTeam(match[0].data.participants.slice(5));
      return (
        <div className="flex flex-col justify-end bg-[#E4E4E4] w-1/2 h-3/5 mx-auto">
          {displayMatchDuration()}
          {displayWinningScore(match[0])}
          <div className="flex flex-row justify-between items-center my-10">
            <MatchTeam team={team1} isLeft={true} />
            <MatchTeam team={team2} isLeft={false} />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      <h1 className="mb-5 font-sans text-4xl font-bold tracking-wider text-left">
        {`Game #${id}`}
      </h1>
      {displayMatch()}
    </div>
  );
};

export default Match;
