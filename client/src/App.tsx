import { useState } from 'react';

import Navbar from './components/Navbar';
import Leaderboard from './Pages/Leaderboard/Leaderboard';

function App() {
  return (
    <div className="bg-[#F2F2F2] h-screen overflow-y-scroll">
      {/* Navbar */}
      <Navbar />
      {/* Leaderboard */}
      <Leaderboard />
    </div>
  );
}

export default App;
