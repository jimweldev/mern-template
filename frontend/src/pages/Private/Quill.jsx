import React, { useState } from 'react';

import ReactQuill from 'react-quill';

const Quill = () => {
  const [value, setValue] = useState('');

  const toolbar = [
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'video'],
    [('blockquote', 'code-block')],
    ['clean'],
  ];

  return (
    <div>
      <ReactQuill
        modules={{
          toolbar,
        }}
        value={value}
        onChange={setValue}
      />

      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
};

export default Quill;
