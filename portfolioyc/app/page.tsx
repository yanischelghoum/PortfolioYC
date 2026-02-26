import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from './data/portfolio';

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0 gap-12">

      <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left">
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-darkgrey leading-tight"
        >
          Hello I'm<br />
          Yanis.
        </h1>

        <p
          className="text-xl md:text-2xl text-jetblack max-w-lg font-medium"
        >
         Efficient and passionate developer.
        </p>

        <p
          className="text-base text-black max-w-lg leading-relaxed position-relative"
        >
          Epitech student.
        </p>

        <div
          className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
        >
          <Link
            href="/projets"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#403D39] hover:text-white transition-colors shadow-lg shadow-blue/30"
          >
            Discover my projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-silver hover:border-white hover:bg-silver/10 transition-colors"
          >
            Hire me
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/yanis-chelghoum-2536b4276/" target="_blank" className="fa-brands fa-linkedin">
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end w-full">
        <div
          className="relative w-80 h-80 md:w-[400px] md:h-[400px]"
        >
          <div className="absolute inset-0 bg-paprika rounded-full blur-3xl opacity-10 -z-10 transform translate-x-4 translate-y-4"></div>

          <div className="h-full w-full bottom-blur-sm">
            <Image
              src={portfolioData.hero.photoUrl}
              alt="Photo professionnelle"
              className="object-cover rounded-xl"
              fill
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}