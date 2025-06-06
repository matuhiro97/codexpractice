'use client';

import { useEffect, useState } from 'react';

interface Entry {
  title: string;
  content: string;
}

export default function Blog() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('blog-entries') || '[]') as Entry[];
    setEntries(saved);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {entries.map((e, i) => (
        <article key={i}>
          <h3>{e.title}</h3>
          <p>{e.content}</p>
        </article>
      ))}
    </div>
  );
}
