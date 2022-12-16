import React from 'react';

const Team = (props: any): React.ReactElement => {
  if (props != null) {
    return (
      <div className="flex flex-row">
        {props.props.map((player: any) => (
          <div className="flex flex-col items-center mx-7 mt-1">
            <img
              src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${player.SKIN.toLowerCase()}.png`}
              className="rounded-full w-12 h-12"
            ></img>
            <div className="w-16 mt-1 flex items-center justify-center text-xs tracking-tight font-bold">
              {player.NAME}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>Error</div>;
  }
};

export default Team;
