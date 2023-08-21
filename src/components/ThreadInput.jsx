import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [body, setText] = useState('');
  const [category, onCategoryChange] = useInput('');

  function addthread() {
    if (body.trim()) {
      addThread({ title, body, category });
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="flex flex-col">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Title" className="border border-gray-400 rounded-md p-2" />
      <textarea type="body" placeholder="What are you thinking?" value={body} onChange={handleTextChange} className="border border-gray-400 rounded-md p-2 bg-transparent" />
      <p className=" flex justify-end -mt-6 -z-10 mr-4">
        <strong>{body.length}</strong>
        /320
      </p>
      <input type="text" value={category} onChange={onCategoryChange} placeholder="Category" className="border border-gray-400 rounded-md p-2" />
      <button type="submit" onClick={addthread} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Post</button>  
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
