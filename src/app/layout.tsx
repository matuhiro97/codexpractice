import './globals.css';
import { ReactNode } from 'react';
import Layout from '../components/Layout';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
