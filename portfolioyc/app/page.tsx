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
          An efficient and passionate developer.
        </p>

        <p
          className="text-base text-black max-w-lg leading-relaxed position-relative"
        >
         <img src="https://940f88d3f7078694512df59516b0461c.cdn.bubble.io/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1605786836050x199045280153180350/epitech-logo-signature-noir.png" alt="Epitech Logo" className="w-15 h-12 inline-block mr-2"></img>Epitech student.
        </p>

        <div
          className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
        >
          <Link
            href="/projets"
            className="px-6 py-3 bg-parchment text-black font-semibold rounded-lg hover:bg-[#403D39] hover:text-white transition-colors shadow-lg shadow-blue/30"
          >
            Discover my projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-transparent text-black font-semibold rounded-lg border border-silver hover:border-white hover:bg-silver/10 hover:text-white transition-colors"
          >
            Hire me
          </Link>
        </div>
        <div className= "flex flex-wrap gap-4 pt-4 justify-center md:justify-start ">
          <Link href="https://www.linkedin.com/in/yanis-chelghoum-2536b4276/" target="_blank" className="fa-brands fa-linkedin">
          <img src="data:image/png;base64,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" alt="linkedin" className="w-17 h-16"></img>
          </Link>
          <Link href="https://github.com/yanischelghoum" target="_blank" className="fa-brands fa-github">
          <img src="data:image/png;base64,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" alt="github" className="w-17 h-16"></img>
          </Link>
          <Link href="mailto:yanis.chelghoum@epitech.eu" target="_blank" className="fa-solid fa-envelope" >
          <img src="data:image/png;base64,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" alt="new-post" className="w-18 h-18"></img>
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