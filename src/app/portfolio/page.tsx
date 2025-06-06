'use client';

import { useEffect, useState } from 'react';

interface Entry {
  title: string;
  content: string;
}

export default function Portfolio() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('portfolio-entries') || '[]') as Entry[];
    setEntries(saved);
  }, []);

  return (
    <div>
      <h1>Portfolio</h1>
      {entries.map((e, i) => (
        <section key={i} style={{ marginBottom: '1rem' }}>
          <h3>{e.title}</h3>
          <p>{e.content}</p>
        </section>
      ))}
    </div>
  );
}
