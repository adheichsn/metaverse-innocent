import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Metaverse | Telkom InnoCent',
  description: 'smarteye.id',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/itdri.png'/>
        <link rel='manifest' href='/app.webmanifest'/>
      </head>
      <body className={inter.className}>
        <Provider>
          <main>
            <Navbar />
            {children}
            <Footer/>
          </main>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
