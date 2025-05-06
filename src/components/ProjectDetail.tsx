import { IInnovation } from "@/interfaces/IInnovation";
import { IProject } from "@/interfaces/iProject";
import { ChevronLeft, Code, Cpu, Github, Globe } from "lucide-react";


interface ProjectDetailProps {
  project: IProject | null;
  onBackClick: () => void;
  innovations: IInnovation[];
}

export function ProjectDetail({ project, onBackClick, innovations }: ProjectDetailProps) {
  if (!project) return null;
  
  // Get associated innovations for this project
  const projectInnovations = innovations.filter(
    innovation => project.innovations && project.innovations.includes(innovation.id)
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={onBackClick}
        className="flex items-center text-gray-400 hover:text-white mb-8 group"
      >
        <ChevronLeft className="mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </button>
      
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="h-64 bg-gray-700 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
          </div>
        </div>
        
        <div className="p-8">
          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full bg-gray-700 text-cyan-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Project Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">About the Project</h2>
            <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
          </div>
          
          {/* Core Innovations Used */}
          {projectInnovations.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Core Innovations Used</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectInnovations.map(innovation => (
                  <div key={innovation.id} className="bg-gray-900 p-4 rounded-lg flex items-start">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-1">
                      {innovation.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{innovation.title}</h3>
                      <p className="text-gray-400 text-sm">{innovation.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <Github className="mr-2" size={20} />
                View on GitHub
              </a>
              
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                <Globe className="mr-2" size={20} />
                Visit Project
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Features */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Project Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mb-4">
                {i === 0 ? <Code size={24} className="text-purple-400" /> : 
                 i === 1 ? <Cpu size={24} className="text-purple-400" /> : 
                 <Globe size={24} className="text-purple-400" />}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {i === 0 ? "Clean Architecture" : 
                 i === 1 ? "Powerful Performance" : 
                 "Seamless Integration"}
              </h3>
              <p className="text-gray-400">
                {i === 0 ? "Built with a focus on maintainability and separation of concerns." : 
                 i === 1 ? "Optimized for speed and efficiency across various workloads." : 
                 "Designed to work with existing tools and infrastructure."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}