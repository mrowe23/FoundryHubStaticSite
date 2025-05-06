import { projectsData } from "../data/projectData";
import { IProject } from "@/interfaces/iProject";
import { useEffect, useState } from "react";
import { HeroSection } from "./HeroSection";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectDetail } from "./ProjectDetail";

export default function App(): JSX.Element {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);

  useEffect(() => {
    const mockPathname = window.location.hash.slice(1) || '';
    if (mockPathname && projects) {
      const project = projects.find((p) => p.slug === mockPathname);
      if (project) {
        setSelectedProject(project);
        setIsDetailView(true);
      }
    }
  }, [projects]);

  const handleProjectClick = (project: IProject): void => {
    setSelectedProject(project);
    setIsDetailView(true);
    window.location.hash = project.slug;
  };

  const handleBackClick = (): void => {
    setIsDetailView(false);
    setSelectedProject(null);
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {!isDetailView ? (
        <>
          <HeroSection />
          <ProjectsGrid projects={projects} onProjectClick={handleProjectClick} />
        </>
      ) : (
        <ProjectDetail project={selectedProject} onBackClick={handleBackClick} />
      )}
    </div>
  );
}