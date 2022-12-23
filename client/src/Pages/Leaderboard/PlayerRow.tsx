import React from 'react';

const PlayerRow = (props: any) => {
  return (
    <tr className="font-sans text-white border border-collapse border-[#1C1C1F] bg-[#7B7A8E] hover:bg-[#31313C]">
      <td className="py-4 px-5">{props.props.id}</td>
      <td className="my-4 mr-10">
        <a
          href={`https://www.op.gg/summoners/na/${props.props.name}`}
          target="_blank"
        >
          <div className="w-full h-full">{props.props.name}</div>
        </a>
      </td>
      <td className="py-4 px-5">
        {`${((props.props.games_won / props.props.games_played) * 100).toFixed(
          0
        )}%`}
      </td>
      <td className="py-4 px-5">{`${props.props.games_won}W ${
        props.props.games_played - props.props.games_won
      }L`}</td>
      <td className="py-4 px-5">{props.props.games_played}</td>
      {/* <td className="py-4 px-5">{props.}</td> */}
    </tr>
  );
};

export default PlayerRow;
