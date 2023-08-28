/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import propTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadDetail({ thread }) {
  return (
    <ThreadItem {...thread} />
  );
}

ThreadDetail.propTypes = {
  thread: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    upVotesBy: propTypes.arrayOf(propTypes.string).isRequired,
    downVotesBy: propTypes.arrayOf(propTypes.string).isRequired,
    owner: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
    }).isRequired,
    comments: propTypes.arrayOf(propTypes.shape({
      id: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
      createdAt: propTypes.string.isRequired,
      upVotesBy: propTypes.arrayOf(propTypes.string).isRequired,
      downVotesBy: propTypes.arrayOf(propTypes.string).isRequired,
      owner: propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        avatar: propTypes.string.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};

export default ThreadDetail;
