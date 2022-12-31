import { matchesData } from '../types/databaseTypes';
import { Participant } from '../types/schema';

export const sortTeam = (team: Participant[]) => {
  let returnTeam = new Array<Participant>(5);
  team.map((player: Participant) => {
    let position = 0;
    switch (player.INDIVIDUAL_POSITION) {
      case 'TOP':
        position = 0;
        break;
      case 'JUNGLE':
        position = 1;
        break;
      case 'MIDDLE':
        position = 2;
        break;
      case 'BOTTOM':
        position = 3;
        break;
      case 'UTILITY':
        position = 4;
        break;
      default:
        break;
    }
    returnTeam[position] = player;
  });
  return returnTeam;
};

export const displayWinningScore = (match: matchesData) => {
  return (
    <div className="text-2xl font-bold tracking-wide">
      {match.data.participants[0].WIN === 'Win' ? (
        <span>
          <span className="text-blue-800">1</span>-0
        </span>
      ) : (
        <span>
          0-<span className="text-blue-800">1</span>
        </span>
      )}
    </div>
  );
};
