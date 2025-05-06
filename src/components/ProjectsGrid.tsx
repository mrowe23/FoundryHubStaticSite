import { IProject } from "@/interfaces/iProject";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid({ projects, onProjectClick, activeInnovationFilter }: { projects: IProject[]; onProjectClick: (project: IProject) => void; activeInnovationFilter: string | null }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-center">
          <span className="border-b-4 border-theme-primary pb-2">
            {activeInnovationFilter ? 'Filtered Projects' : 'Featured Projects'}
          </span>
        </h2>
        
        {activeInnovationFilter && (
          <div className="text-sm text-theme-muted">
            Showing projects for selected innovation
          </div>
        )}
      </div>
      
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-theme-secondary text-lg">No projects match the selected filter.</p>
        </div>
      )}
    </div>
  );
}