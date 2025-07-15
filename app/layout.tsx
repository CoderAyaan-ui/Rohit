import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rohit Sharma - The Hitman | Official Fan Website',
  description: 'Explore the incredible journey of Rohit Sharma, India\'s cricket captain and one of the greatest batsmen of all time. Statistics, achievements, and career highlights.',
  keywords: 'Rohit Sharma, cricket, India captain, Mumbai Indians, IPL, hitman, ODI, T20I, Test cricket',
  authors: [{ name: 'Rohit Sharma Fan Website' }],
  openGraph: {
    title: 'Rohit Sharma - The Hitman',
    description: 'Celebrating the journey of India\'s cricket captain and legendary batsman',
    type: 'website',
    images: [
      {
        url: '/rohit-sharma-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rohit Sharma - The Hitman',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Sharma - The Hitman',
    description: 'Celebrating the journey of India\'s cricket captain and legendary batsman',
    images: ['/rohit-sharma-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}