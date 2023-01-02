import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Player = () => {
  const { name } = useParams();
  return (
    <div className="bg-[#F2F2F2] h-screen overflow-y-scroll">
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/2">{name}</div>
      </div>
    </div>
  );
};

export default Player;
