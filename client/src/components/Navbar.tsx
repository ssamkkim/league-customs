import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-3 flex justify-center items-center uppercase font-bold font-sans text-sm tracking-wider">
      <a href="/" className="p-1 mx-1">
        S2
      </a>
      <a href="/" className="p-1 mx-1">
        Leaderboard
      </a>
      <a href="/" className="p-1 mx-1">
        Match History
      </a>
    </nav>
  );
};

export default Navbar;
