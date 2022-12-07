interface Player {
  rank: number;
  name: string;
  winRate: number;
  gamesPlayed: number;
  tier: string;
}

export const players: Player[] = [
  {
    rank: 1,
    name: 'm700',
    winRate: 100,
    gamesPlayed: 5,
    tier: 'Diamond 2',
  },
  {
    rank: 2,
    name: '248ˉ',
    winRate: 87.5,
    gamesPlayed: 5,
    tier: 'Diamond 1',
  },
  {
    rank: 3,
    name: 'tuxilaoban',
    winRate: 66.7,
    gamesPlayed: 5,
    tier: 'Diamond 4',
  },
  {
    rank: 4,
    name: 'scammo',
    winRate: 50,
    gamesPlayed: 4,
    tier: 'Platnium 4',
  },
  {
    rank: 5,
    name: 'hadesXV1',
    winRate: 0,
    gamesPlayed: 3,
    tier: 'Bronze 2',
  },
];
