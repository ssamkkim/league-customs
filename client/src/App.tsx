import { useState } from 'react';

import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-[#F2F2F2] h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Leaderboard */}
      <Leaderboard />
    </div>
  );
}

export default App;
