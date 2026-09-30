import Image from 'next/image';
import { portfolioData } from '../data/portfolio';

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <main className="min-h-screen pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-Black mb-4">
          My Projects
        </h1>
        <p className="text-lg text-Black max-w-2xl mx-auto">
          A selection of the projects I enjoyed building the most, from school assignments to full-stack applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          // Skip empty entries (like id: 3 in your portfolio.ts)
          if (!project.title) return null;

          return (
            <article 
              key={project.id} 
              className="flex flex-col bg-parchment border border-linen rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              {/* Espace pour l'image */}
              <div className="relative w-full h-48 bg-almond border-b border-linen">
                {project.imagePath ? (
                  <Image
                    src={project.imagePath}
                    alt={`Image of ${project.title} project`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <p className="text-sm text-stonebrown text-center">Image not available</p>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                {/* En-tête du projet */}
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h2 className="text-xl font-bold text-darkgrey leading-tight">
                    {project.title}
                  </h2>
                  <span className="inline-block whitespace-nowrap px-2.5 py-1 bg-linen text-charcoal text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
                
                {/* Stack Technique */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack?.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-white border border-linen text-stonebrown text-xs font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Description principale */}
                <p className="text-charcoal text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Section inférieure (Rétrospective & Lien) */}
                <div className="mt-auto pt-4 border-t border-linen">
                  <div className="mb-5">
                    <h3 className="text-xs font-bold text-darkgrey uppercase tracking-wider mb-2">
                      What I learned:
                    </h3>
                    <p className="text-stonebrown text-sm italic">
                      "{project.reflection}"
                    </p>
                  </div>
                  
                  {project.siteUrl && (
                    <a 
                      href={project.siteUrl.startsWith('http') ? project.siteUrl : `https://${project.siteUrl}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2.5 bg-charcoal text-white text-sm font-medium rounded-lg hover:bg-stonebrown transition-colors"
                    >
                      Visit site
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
