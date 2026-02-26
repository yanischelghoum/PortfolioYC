"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Path', path: './path' },
  { name: 'Projects', path: './projects' },
  { name: 'Me', path: './me' },
  { name: 'Contact', path: './contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
              Welcome to Yanis's Resume
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-paprika ${
                    isActive ? 'text-paprika' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-almond text-black text-sm font-medium rounded-full hover:bg-[#000000] hover:text-white transition-colors shadow-md shadow-paprika/20"
            >
              Download CV
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-carbon focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-floral border-b border-silver">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-paprika bg-silver/20' : 'text-charcoal hover:text-carbon hover:bg-silver/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-5 py-3 bg-paprika text-floral font-medium rounded-lg shadow-md"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}