import { IProject } from "@/interfaces/iProject";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: IProject[];
  onProjectClick: (project: IProject) => void;
}

export function ProjectsGrid({ projects, onProjectClick }: ProjectsGridProps): JSX.Element {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="border-b-4 border-purple-500 pb-2">Featured Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
        ))}
      </div>
    </div>
  );
}
