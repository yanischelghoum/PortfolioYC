"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Path', path: '/path' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const cvFiles = [
  { label: 'English', file: '/CV-Yanis-Chelghoum-EN.pdf' },
  { label: 'Français', file: '/CV-Yanis-Chelghoum-FR.pdf' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isCvOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!cvMenuRef.current?.contains(e.target as Node)) setIsCvOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsCvOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isCvOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors md:bg-transparent md:backdrop-blur-none ${
        isOpen ? 'bg-parchment' : 'bg-parchment/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-black">
              Yanis's Resume
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-stonebrown ${
                    isActive ? 'text-stonebrown' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="relative" ref={cvMenuRef}>
              <button
                onClick={() => setIsCvOpen(!isCvOpen)}
                aria-haspopup="menu"
                aria-expanded={isCvOpen}
                className="flex items-center gap-2 px-5 py-2.5 bg-parchment text-black text-sm font-medium rounded-full hover:bg-charcoal hover:text-white transition-colors shadow-md"
              >
                Download CV
                <svg
                  className={`h-4 w-4 transition-transform ${isCvOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCvOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl bg-parchment shadow-lg ring-1 ring-charcoal/10"
                >
                  {cvFiles.map((cv) => (
                    <a
                      key={cv.file}
                      role="menuitem"
                      href={cv.file}
                      download={cv.file.slice(1)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsCvOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-white transition-colors"
                    >
                      {cv.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="-mr-2 p-2 rounded-md text-charcoal hover:bg-charcoal/10 focus:outline-none"
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
        <div className="md:hidden bg-parchment border-b border-charcoal/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium ${
                    isActive ? 'text-stonebrown bg-charcoal/10' : 'text-charcoal hover:bg-charcoal/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-stonebrown">
              Download CV
            </p>
            <div className="grid grid-cols-2 gap-3">
              {cvFiles.map((cv) => (
                <a
                  key={cv.file}
                  href={cv.file}
                  download={cv.file.slice(1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-3 bg-charcoal text-white font-medium rounded-full shadow-md"
                >
                  {cv.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}