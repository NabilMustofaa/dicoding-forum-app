import React from 'react';
import PropTypes from 'prop-types';


function ThreadsList({ threads, upVote, downVote }) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <div>asd</div>
         ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadsList;
