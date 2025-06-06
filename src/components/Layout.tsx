import { ReactNode } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dev">Dev</Link>
      </nav>
      <main>{children}</main>
      <footer>© 2025 My Website. All rights reserved.</footer>
    </div>
  );
};

export default Layout;
