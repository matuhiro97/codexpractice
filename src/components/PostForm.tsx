import { useState } from 'react';

interface Entry {
  title: string;
  content: string;
}

const PostForm = ({ type }: { type: 'blog' | 'portfolio' }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const key = `${type}-entries`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]') as Entry[];
    existing.push({ title, content });
    localStorage.setItem(key, JSON.stringify(existing));
    setTitle('');
    setContent('');
    alert('Saved!');
  };

  return (
    <div className="post-form">
      <h3>Add {type} entry</h3>
      <div className="form-field">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
      </div>
      <div className="form-field">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="content"
        />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default PostForm;
