import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setText] = useState('');
  const [category, setCategory] = useState('');

  function addthread() {
    if (body.trim()) {
      addThread({ title, body, category });
      setText('');
      setTitle('');
      setCategory('');
    }
  }

  function handleTextChange({ target }) {
    setText(target.value);
  }

  function onTitleChange({ target }) {
    setTitle(target.value);
  }

  function onCategoryChange({ target }) {
    setCategory(target.value);
  }

  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-md shadow-md gap-2 mt-4">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Title" className="h-12 w-full px-4 rounded bg-gray-100 text-gray-500 shadow-sm" />
      <textarea type="body" placeholder="What are you thinking?" value={body} onChange={handleTextChange} className=" h-32 w-full px-4 py-2 rounded bg-gray-100 text-gray-500" />
      <p className=" flex justify-end -mt-6 -z-10 mr-4">
        <strong>{body.length}</strong>
        /320
      </p>
      <select value={category} onChange={onCategoryChange} className="h-12 w-full px-4 rounded bg-gray-100 text-gray-500 shadow-sm">
        <option value="" disabled>Category</option>
        <option value="general">General</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
      </select>
      <button type="submit" onClick={addthread} className="h-12 w-full px-4 rounded bg-orange-500 font-semibold text-white">Post</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
