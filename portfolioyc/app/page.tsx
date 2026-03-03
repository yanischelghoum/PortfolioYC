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
        <div className= "flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <Link href="https://www.linkedin.com/in/yanis-chelghoum-2536b4276/" target="_blank" className="fa-brands fa-linkedin">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQUlEQVR4nO2av2sUQRzFP/4Egyamy48ilWhhKkXQ3uokVomthU36aMBCBMVGsdG/wFbEThBMEIMQTGGqICIWioISJCaiETUrX3kLy5Kdm93s5WZxHizcvXk3897t/Nqbg4iIiKo4A8wA34Cky9eavLTKhrgegPmk4LpW5k7YB9aBKWCQ7mMQuChPie+dmZXYQoSGS/Jm3awt1iQeIDwMyNuqjzjti6Ei8fX3XwQ5CTwCPgEfgYfA0Xp9dj6IzWa/N5kOfwDHaFCQRfG2xhwE9mtON+5J/X47F+Sr+J4M1yvOyhoT5Kn4G0CfQlwVN1+/384FsXHwfZMxYqvtcRo2ax0C7gHvgA9NnbVCQbLVIM8dO9I5T80e4BzwAHivbrmiGfEWcGQ7grTbXvtoXrUp/wXcBnZvRxAX7/MlLAEXgBFgL3AAOAXcBX5KY2NvZ4hBbPXfAK44DBpOAJ9Vx3RJf5UMF/FFmnFgIvN+l6P906pjReuVr49Khot4VyO2rbkDLEtjm86b6lp5PJZmMrQgtq15mSn/k3m9AOzL6c+r7H5oQS6Lfw2Malay8fBWvD3CZnFY/JvQgiyIH8vxZ8W/yPF9mXESVJAv4vtzfL94K89ih/iN0IK4Gt9Ke07EIMQgxCAuxCDEIMQgLrSroOjy1VSpt9Ygc47GnpXQVKm31iChIPH1typhCEdueQyX+Yl2RmI7swsN02WO3loSr+uBZ4juY0gh0l9ZvI+p0+OCRh9Pp2jpFqaHo438w0BERAT/8BflE3u12wJrWAAAAABJRU5ErkJggg==" alt="linkedin" className="w-17 h-16"></img>
          </Link>
          <Link href="https://github.com/yanischelghoum" target="_blank" className="fa-brands fa-github">
            <img src="data:image/png;base64,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" alt="github"></img>
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