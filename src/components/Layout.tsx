import { ReactNode } from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link href="/">Home</Link> |{' '}
        <Link href="/about">About</Link> |{' '}
        <Link href="/blog">Blog</Link> |{' '}
        <Link href="/portfolio">Portfolio</Link> |{' '}
        <Link href="/contact">Contact</Link> |{' '}
        <Link href="/dev">Dev</Link>
      </nav>
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        © 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
