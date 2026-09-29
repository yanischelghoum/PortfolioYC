'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  School,
  BookOpen,
  Briefcase,
  Building2,
  Code2,
  TrafficCone,
  ImageIcon,
} from 'lucide-react';

type Entry = {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  image: string;
};

const education: Entry[] = [
    {
    id: 'epitech',
    title: "Bachelor's Degree in Digital Technologies – Software & AI Engineering",
    organization: 'Epitech',
    location: 'Strasbourg, France',
    period: '2025 — present',
    description:
      'Specializing in fullstack application development, AI engineering, and scalable cloud-based architectures.',
    tags: ['Python', 'JavaScript', 'Express', 'Next.js', 'MySQL', 'AI Engineering'],
    icon: GraduationCap,
    image: '/epitech.jpg',
  },
    {
    id: 'bts',
    title: 'BTS (Brevet de Technicien Supérieur)',
    organization: 'Alaji',
    location: 'Schiltigheim, France',
    period: '2023 — 2025',
    description:
      'Higher Technician Certificate in Opticianry, combining optical technical skills with eyewear expertise.',
    tags: ['Optics', 'Eyewear', 'Technical Skills', 'Commercial Skills'],
    icon: GraduationCap,
    image: '/alaji.webp',
  },
  {
    id: 'highschool',
    title: 'Baccalauréat',
    organization: 'Lycée Jean-Rostand',
    location: 'Strabourg, France',
    period: '2021 — 2023',
    description:
      'High school Diploma in Science, specializing in Laboratory Sciences and Biotechnologies.',
    tags: ['Science', 'Laboratory', 'Biotechnologies'],
    icon: GraduationCap,
    image: '/Rostand.png',
  },
];

const experiences: Entry[] = [
  {
      id: 'Odygo',
    title: 'Fullstack Developer',
    organization: 'Odygo',
    location: 'Schiltigheim, France',
    period: 'Summer 2026, June  - September',
    description:
      "Played a pivotal role in engineering the V2 of a driving school's digital platform. Architected the new version from the ground up, handling complex backend logic, seamless API integrations, and dynamic frontend experiences.",
    tags: ['React', 'Prisma', 'Typescript', 'Node.js', 'API Development', 'Fullstack Development'],
    icon: Code2,
    image: '/og.png',
  },
  {
    id: 'Atol',
    title: 'Apprentice Optician',
    organization: 'Atol',
    location: 'Bischheim, France',
    period: '2023 — 2025',
    description:
      'Combined practical technical skills in the workshop, such as precision lens mounting and frame adjustments, with high-quality customer service, optical measurements, and sales.',
    tags: ['Optics', 'Customer Service', 'Teamwork'],
    icon: Briefcase,
    image: '/atolbischheim.jpg',
  },
];

/** Reveals its children once they scroll into view. */
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-10 blur-[2px]'
      }`}
    >
      {children}
    </div>
  );
}

function EntryCard({ entry, flipped }: { entry: Entry; flipped: boolean }) {
  const Icon = entry.icon;

  return (
    <article
      className="group relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white
                 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.10)]
                 transition-all duration-500 ease-out
                 hover:-translate-y-1.5 hover:bg-white
                 hover:shadow-[0_4px_12px_rgba(0,0,0,0.10),0_28px_64px_rgba(0,0,0,0.18)]"
    >
      {/* Accent stripe, on the side the content sits */}
      <div
        className={`absolute top-0 bottom-0 w-[5px] bg-gradient-to-b from-black to-neutral-600
                    transition-all duration-500 ease-out group-hover:w-[9px] ${
                      flipped ? 'right-0' : 'left-0'
                    }`}
      />

      <div
        className={`relative flex flex-col md:flex-row gap-7 md:gap-10 p-7 md:p-9 ${
          flipped ? 'md:flex-row-reverse pr-9 md:pr-14' : 'pl-9 md:pl-14'
        }`}
      >
        {/* ---- Image slot ---- */}
        <div className="w-full md:w-[230px] lg:w-[260px] flex-shrink-0">
          <div
            className="relative aspect-[4/3] md:aspect-square w-full overflow-hidden rounded-[22px]
                       border border-black/10 bg-white"
          >
            {entry.image ? (
              <Image
                src={entry.image}
                alt={entry.organization}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                <ImageIcon className="h-7 w-7 text-neutral-400" strokeWidth={1.5} />
                <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Add an image
                </p>
              </div>
            )}

            {/* Icon mark, tucked into the image corner */}
            <div
              className={`absolute bottom-0 flex h-11 w-11 items-center justify-center rounded-[14px]
                          bg-black shadow-md transition-transform duration-500 ease-out
                          group-hover:scale-110 ${
                            flipped
                              ? 'right-0 translate-x-1 translate-y-1'
                              : 'left-0 -translate-x-1 translate-y-1'
                          }`}
            >
              <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
            </div>
          </div>
        </div>

        {/* ---- Content ---- */}
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          {/* Period, set as editorial type rather than a badge */}
          <div className="mb-3 flex items-center gap-3">
            <span className="text-[13px] font-bold uppercase tracking-[0.16em] text-black">
              {entry.period}
            </span>
            <span className="h-px flex-1 bg-black/15" />
          </div>

          <h3 className="mb-2 text-2xl font-bold leading-snug tracking-tight text-black md:text-[27px]">
            {entry.title}
          </h3>

          <p className="mb-5 text-[15px] text-black">
            <span className="font-bold">{entry.organization}</span>
            <span className="mx-2 text-black/30">·</span>
            <span className="text-neutral-600">{entry.location}</span>
          </p>

          <p className="mb-6 text-[15px] leading-relaxed text-black">
            {entry.description}
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="relative text-[13px] font-semibold text-black
                           after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                           after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Section({
  label,
  title,
  entries,
  startDelay,
  flipStart = false,
}: {
  label: string;
  title: string;
  entries: Entry[];
  startDelay: number;
  flipStart?: boolean;
}) {
  return (
    <section className="mb-20 md:mb-28">
      <Reveal delay={startDelay}>
        <div className="mb-8 flex items-center gap-4 px-2">
          <div>
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-black">
              {label}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
              {title}
            </h2>
          </div>
          <div className="mt-4 h-px flex-1 bg-gradient-to-r from-black/25 to-transparent" />
        </div>
      </Reveal>

      <div className="space-y-8 md:space-y-10">
        {entries.map((entry, i) => (
          <Reveal key={entry.id} delay={startDelay + 120 + i * 130}>
            <EntryCard entry={entry} flipped={flipStart ? i % 2 === 0 : i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function PathPage() {
  return (
    <div className="min-h-screen px-4 pb-28 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <Reveal>
          <div className="mb-16 px-2 md:mb-20">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-black">
              Since high school
            </p>
            <h1 className="mb-6 text-5xl font-light leading-tight tracking-tight text-black md:text-6xl">
              My <span className="font-bold">Path.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-black">
              From my high school years to today: the education that shaped me
              and the professional experiences that made me grow.
            </p>
          </div>
        </Reveal>

        <Section
          label="Education"
          title="My academic background"
          entries={education}
          startDelay={100}
        />

        <Section
          label="Experience"
          title="My professional experience"
          entries={experiences}
          startDelay={0}
          flipStart
        />
      </div>
    </div>
  );
}
