import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Typo géométrique et très lisible
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mon Portfolio | Développeur informatique',
  description: 'Portfolio présentant mon parcours, mes projets scolaires et personnels, ainsi que mon évolution technique.', // Bon pour le SEO 
  keywords: ['Portfolio', 'Développeur', 'Next.js', 'Epitech', 'Web'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}