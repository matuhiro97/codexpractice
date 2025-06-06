"use client";

import { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>();

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dev">Dev</Link>
        <button onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
      <main>{children}</main>
      <footer>© 2025 My Website. All rights reserved.</footer>
    </div>
  );
};

export default Layout;
