import { IProject } from "@/interfaces/iProject";
import { Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
    project: IProject;
    onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps): JSX.Element {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1 cursor-pointer" onClick={onClick}>
            <div className="h-48 bg-gray-700 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                        <span key={`${project.id}-tag-${index}`} className="text-xs px-2 py-1 rounded-full bg-gray-700 text-cyan-400">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center text-sm" onClick={(e) => e.stopPropagation()}>
                        <Github size={16} className="mr-1" />
                        View Code
                    </a>
                    <div className="text-purple-500 flex items-center text-sm">
                        View Details
                        <ArrowRight size={16} className="ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
