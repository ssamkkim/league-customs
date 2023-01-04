import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import Match from '../Pages/Match/Match';
import MatchHistory from '../Pages/MatchHistory/MatchHistory';
import Player from '../Pages/Player/Player';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/match-history" element={<MatchHistory />} />
        <Route path="/player/:rank/:name" element={<Player />} />
        <Route path="/match/:id" element={<Match />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
