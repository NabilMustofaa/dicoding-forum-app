import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import parse from 'html-react-parser';

import postedAt from '../utils';

function ThreadItem({
  id, title, body, user, category,
}) {
  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-md shadow-md gap-2 mt-4">
      <div className="flex items-center">
        <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-2">
          <span className="text-md font-semibold">{user.name}</span>
          <span className="text-sm">{postedAt(id)}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="flex justify-between">
        <span className="text">{parse(body)}</span>
      </div>
      <div className="flex justify-start">
        <span className="bg-gray-200 rounded-md px-4 py-2 text-sm">{category}</span>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadItem;
