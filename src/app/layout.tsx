import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.scss';
import Providers from './services/provider';

const roboto = Roboto({ weight: '300', subsets: ['latin'], style: 'normal' });

export const metadata: Metadata = {
  title: 'Museum',
  description: 'Louvre landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={roboto.className}>{children}</body>
      </Providers>
    </html>
  );
}
