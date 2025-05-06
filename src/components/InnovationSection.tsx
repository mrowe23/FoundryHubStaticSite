import { IInnovation } from "@/interfaces/IInnovation";
import { Github, ArrowRight } from "lucide-react";


interface InnovationsSectionProps {
  innovations: IInnovation[];
  activeFilter: string | null;
  onInnovationClick: (id: string) => void;
}

export function InnovationsSection({ innovations, activeFilter, onInnovationClick }: InnovationsSectionProps) {
    return (
      <div className="bg-theme-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="border-b-4 border-theme-accent pb-2">Core Innovations</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation) => (
              <div 
                key={innovation.id}
                onClick={() => onInnovationClick(innovation.id)}
                className={`${
                  activeFilter === innovation.id 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-theme-accent' 
                    : 'bg-theme-dark hover:bg-gray-700'
                } p-6 rounded-xl transition-all cursor-pointer`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-theme-primary">{innovation.title}</h3>
                </div>
                
                <p className="text-theme-secondary mb-4">{innovation.description}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={innovation.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-muted hover:text-theme-primary flex items-center text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="mr-1" />
                    Research
                  </a>
                  
                  <div className={`${
                    activeFilter === innovation.id 
                      ? 'text-theme-accent' 
                      : 'text-theme-primary'
                  } flex items-center text-sm`}>
                    {activeFilter === innovation.id ? 'Filtering' : 'Filter Projects'}
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }