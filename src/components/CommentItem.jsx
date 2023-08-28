/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import postedAt from '../utils';

function CommentItem({
  content, createdAt, owner,
}) {
  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-md shadow-md gap-2 mt-4">
      <div className="flex items-center">
        <img src={owner.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col ml-2">
          <p className="text-md font-semibold">{owner.name}</p>
          <p className="text-sm">{postedAt(createdAt)}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text">{parse(content)}</p>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentItem;
