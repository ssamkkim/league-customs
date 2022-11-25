interface Player {
  rank: number;
  name: string;
  inGameName: string;
  winRate: number;
  gamesPlayed: number;
  tier: string;
  playerLink: string;
}

export let players: Player[] = [
  {
    rank: 1,
    name: 'parm',
    inGameName: 'm700',
    winRate: 100,
    gamesPlayed: 5,
    tier: 'Diamond 2',
    playerLink: 'https://www.op.gg/summoners/na/m700',
  },
  {
    rank: 2,
    name: 'leno',
    inGameName: '248ˉ',
    winRate: 87.5,
    gamesPlayed: 5,
    tier: 'Diamond 1',
    playerLink: 'https://www.op.gg/summoners/na/248%CB%89',
  },
  {
    rank: 3,
    name: 'little',
    inGameName: 'tuxilaoban',
    winRate: 66.7,
    gamesPlayed: 5,
    tier: 'Diamond 4',
    playerLink: 'https://www.op.gg/summoners/na/tuxilaoban',
  },
  {
    rank: 4,
    name: 'scammo',
    inGameName: 'scammo',
    winRate: 50,
    gamesPlayed: 4,
    tier: 'Platnium 4',
    playerLink: 'https://www.op.gg/summoners/na/scammo',
  },
  {
    rank: 5,
    name: 'john cong le',
    inGameName: 'hadesXV1',
    winRate: 0,
    gamesPlayed: 3,
    tier: 'Bronze 2',
    playerLink: 'https://www.op.gg/summoners/na/hadesXV1',
  },
];
