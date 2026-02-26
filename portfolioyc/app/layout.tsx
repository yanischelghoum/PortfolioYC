import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import ColorBends from './components/ColorBends';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mon Portfolio | Développeur',
  description: 'Portfolio présentant mon parcours, mes projets scolaires et personnels.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{backgroundColor: '#c6ac8f'}}>
        <ColorBends
          rotation={320}
          speed={0.2}
          transparent
          colors={["#5e503f", "#000000", "#ffffff"]}
          autoRotate={0}
          scale={0.7}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
        />
        <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
