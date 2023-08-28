/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThreadItem from './ThreadItem';

function ThreadsList({
  threads, upVote, downVote, neutralVote,
}) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           // eslint-disable-next-line react/jsx-props-no-spreading
           <Link to={`/thread/${thread.id}`} key={thread.id}>
             <ThreadItem key={thread.id} {...thread} addUpvote={upVote} addDownvote={downVote} toggleNeutral={neutralVote} />
           </Link>
         ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadsList;
