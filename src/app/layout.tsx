import React from 'react';
import { Roboto } from 'next/font/google';
import './globals.scss';
import Providers from './services/provider';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
  style: 'normal',
});

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
