import './globals.css';
import { ReactNode } from 'react';
import Layout from '../components/Layout';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
