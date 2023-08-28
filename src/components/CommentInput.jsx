import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ addComment }) {
  const [content, setText] = useState('');

  function addcomment() {
    if (content.trim()) {
      addComment({ content });
      setText('');
    }
  }

  function handleTextChange({ target }) {
    setText(target.value);
  }

  function cancelComment() {
    setText('');
  }

  return (
    <div className="flex flex-col  bg-white rounded-md shadow-md gap-2 px-6 py-4">
      <textarea type="body" placeholder="What are you thinking?" value={content} className=" h-32 px-4 py-2 border border-gray-300 rounded text-gray-500" onChange={handleTextChange} />
      <div className="flex flex-row justify-end gap-2">
        <button type="submit" onClick={cancelComment} className="h-12 w-48 px-4 rounded bg-gray-600 font-semibold text-white">Cancel</button>
        <button type="submit" onClick={addcomment} className="h-12 w-48 px-4 rounded bg-orange-500 font-semibold text-white">Comment</button>
      </div>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
