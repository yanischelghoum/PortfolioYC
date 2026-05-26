'use client';

import React from 'react';
import { FileText, CheckSquare, Zap, Clock, Rocket, ChevronRight } from 'lucide-react';

const pathData = [
  {
    id: 1,
    title: 'First Resume',
    period: 'Step 01',
    description: 'My very first steps into web development. Building a digital resume from scratch to understand the core building blocks of the web and structure information effectively.',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Integration'],
    icon: FileText,
    bgColor: 'bg-blue-500/20',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    title: 'E-Todo',
    period: 'Step 02',
    description: 'A dynamic task management application. This project introduced me to logic, state management, and interacting with the Document Object Model (DOM).',
    skills: ['JavaScript', 'DOM Manipulation', 'Event Handling', 'Local Storage'],
    icon: CheckSquare,
    bgColor: 'bg-green-500/20',
    textColor: 'text-green-600',
  },
  {
    id: 3,
    title: 'Hackathon',
    period: 'Step 03',
    description: 'An intense collaborative experience. Working under pressure with a team to conceptualize, design, and deliver a functional prototype within a strict deadline.',
    skills: ['Team Collaboration', 'Rapid Prototyping', 'Git Workflow', 'Pitching'],
    icon: Zap,
    bgColor: 'bg-yellow-500/20',
    textColor: 'text-yellow-600',
  },
  {
    id: 4,
    title: 'Tardis',
    period: 'Step 04',
    description: 'Diving deeper into complex architectures and backend logic. A challenging project that pushed my problem-solving skills and code organization to the next level.',
    skills: ['Backend Logic', 'System Architecture', 'Algorithmic Thinking', 'Database Management'],
    icon: Clock,
    bgColor: 'bg-purple-500/20',
    textColor: 'text-purple-600',
  },
  {
    id: 5,
    title: 'Final Project',
    period: 'Step 05 (Coming Soon)',
    description: 'The culmination of this academic year\'s learning. A comprehensive, large-scale project that will bring together all the skills acquired so far into a polished product.',
    skills: ['Full-stack Development', 'Deployment', 'Advanced Architecture', 'Project Management'],
    icon: Rocket,
    bgColor: 'bg-gray-400/20',
    textColor: 'text-gray-600',
  }
];

export default function PathPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 animate-in fade-in zoom-in duration-700">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-charcoal">
            My Learning <span className="font-bold">Path.</span>
          </h1>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto font-light leading-relaxed">
            A guided tour of my academic journey, highlighting key projects and the technical skills acquired at every milestone.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/30 to-transparent transform -translate-x-1/2"></div>
          {/* Left Vertical Line (Mobile only) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/30 to-transparent"></div>

          <div className="space-y-12 md:space-y-24">
            {pathData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start group">
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-8 md:left-1/2 w-14 h-14 rounded-full border-[6px] border-white/30 shadow-sm flex items-center justify-center transform -translate-x-1/2 z-10 bg-white/20 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-md group-hover:border-white/50">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${item.bgColor}`}>
                      <Icon className={`w-5 h-5 ${item.textColor}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 pt-2 md:pt-0 flex flex-col ${isEven ? 'md:pr-16 md:items-end md:text-right' : 'md:pl-16 md:ml-auto md:items-start md:text-left'}`}>
                    
                    {/* Animate-in delay based on index */}
                    <div 
                      className="bg-white/30 backdrop-blur-lg p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/40 hover:border-white/60 hover:bg-white/40 transition-all duration-300 w-full relative group-hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                      style={{ animationDelay: `${index * 150}ms`, animationDuration: '700ms' }}
                    >
                      
                      {/* Desktop Arrow Indicator */}
                      <div className={`flex items-center gap-3 mb-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/40 text-charcoal uppercase tracking-widest shadow-sm">
                          {item.period}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-4 text-charcoal tracking-tight group-hover:text-charcoal/90 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-charcoal/80 mb-8 font-light leading-relaxed text-lg">
                        {item.description}
                      </p>

                      <div className="pt-6 border-t border-white/40">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal/60 mb-4">Skills Acquired</h4>
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          {item.skills.map((skill, skillIdx) => (
                            <span 
                              key={skillIdx} 
                              className="px-3 py-1.5 text-sm font-semibold rounded-xl bg-white/30 text-charcoal border border-white/20 transition-colors hover:border-white/50 hover:bg-white/40"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}