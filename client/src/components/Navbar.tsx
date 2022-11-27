import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-3 flex justify-center items-center uppercase font-bold font-sans text-sm tracking-wider">
      <Link to="/" className="p-1 mx-1">
        S2
      </Link>
      <Link to="/" className="p-1 mx-1">
        Leaderboard
      </Link>
      <Link to="/match-history" className="p-1 mx-1">
        Match History
      </Link>
    </nav>
  );
};

export default Navbar;
