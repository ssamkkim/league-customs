import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import MatchHistory from '../Pages/MatchHistory/MatchHistory';
import PlayerPage from '../Pages/PlayerPage/PlayerPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/match-history" element={<MatchHistory />} />
        <Route path="/player/:name" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
