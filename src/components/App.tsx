import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"; // Import useParams
import { innovationsData } from "../data/innovationData";
import { projectsData } from "../data/projectData";
import { globalStyles } from "../theme/globalStyles";
import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectsGrid } from "./ProjectsGrid";
import { IProject } from "../interfaces/iProject";
import { InnovationsSection } from "./InnovationSection";
import { IInnovation } from "../interfaces/IInnovation";
import { LearnMorePage } from "./LearnMorePage"; // Import LearnMorePage

export default function App() {
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [innovations, setInnovations] = useState<IInnovation[]>(innovationsData);
  const [activeInnovationFilter, setActiveInnovationFilter] = useState<string | null>(null);

  // Inject global styles
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = globalStyles;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const handleInnovationFilter = (innovationId: string) => {
    if (activeInnovationFilter === innovationId) {
      setActiveInnovationFilter(null); // Toggle off if already active
    } else {
      setActiveInnovationFilter(innovationId);
    }
  };

  // Filter projects based on selected innovation
  const filteredProjects = activeInnovationFilter
    ? projects.filter(
        (project) =>
          project.innovations &&
          project.innovations.includes(activeInnovationFilter)
      )
    : projects;

  // Component to handle project detail route
  const ProjectDetailRoute = () => {
    const { slug } = useParams<{ slug: string }>(); // Get the slug from the URL
    const project = projects.find((p) => p.slug === slug); // Find the project by slug

    if (!project) {
      return <div className="text-center text-white">Project not found</div>; // Handle invalid slug
    }

    return (
      <ProjectDetail
        project={project}
        onBackClick={() => window.history.back()} // Navigate back
        innovations={innovations}
      />
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <InnovationsSection
                  innovations={innovations}
                  activeFilter={activeInnovationFilter}
                  onInnovationClick={handleInnovationFilter}
                />
                <ProjectsGrid
                  projects={filteredProjects}
                  onProjectClick={(project) =>
                    (window.location.href = `/project/${project.slug}`)
                  }
                  activeInnovationFilter={activeInnovationFilter}
                />
              </>
            }
          />
          <Route path="/learnmore" element={<LearnMorePage />} />
          <Route path="/project/:slug" element={<ProjectDetailRoute />} />
        </Routes>
      </div>
    </Router>
  );
}