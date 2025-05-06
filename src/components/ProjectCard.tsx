import { IProject } from "@/interfaces/iProject";
import { Github, ArrowRight } from "lucide-react";


export function ProjectCard({ project, onClick }: { project: IProject; onClick: () => void }) {
    return (
      <div 
        className="bg-theme-card rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1 cursor-pointer"
        onClick={onClick}
      >
        <div className="h-48 bg-theme-dark relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-theme-primary">{project.title}</h3>
          <p className="text-theme-secondary mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-theme-dark text-theme-accent-light"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-muted hover:text-theme-primary flex items-center text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="mr-1" />
              View Code
            </a>
            
            <div className="text-theme-primary flex items-center text-sm">
              View Details
              <ArrowRight size={16} className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  