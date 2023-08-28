import React from 'react';
import propTypes from 'prop-types';

function Leaderboards({ leaderboards }) {
  return (
    <div className="flex flex-col shadow-md rounded-md p-4 bg-white">
      <h1 className="text-2xl font-bold">Leaderboards</h1>
      <div className="flex flex-col">
        <div className="flex justify-between mt-4 mb-2">
          <p>Rank</p>
          <p>Points</p>
        </div>
        {leaderboards.map((item) => (
          <div className="flex justify-between my-2" key={item.user.id}>
            <div className="flex items-center gap-2">
              <img src={item.user.avatar} alt="avatar" className="h-12 w-12 rounded-full" />
              <h5 className="font-semibold">{item.user.name}</h5>
            </div>
            <p>{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Leaderboards.propTypes = {
  leaderboards: propTypes.arrayOf(propTypes.shape({
    user: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
    }).isRequired,
    score: propTypes.number.isRequired,
  })).isRequired,
};

export default Leaderboards;
