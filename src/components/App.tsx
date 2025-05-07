import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
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
import { LearnMorePage } from "./LearnMorePage";
import { Footer } from "./Footer";

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
      setActiveInnovationFilter(null);
    } else {
      setActiveInnovationFilter(innovationId);
    }
  };

  const filteredProjects = activeInnovationFilter
    ? projects.filter(
      (project) =>
        project.innovations &&
        project.innovations.includes(activeInnovationFilter)
    )
    : projects;

  const ProjectDetailRoute = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      return <div className="text-center text-white">Project not found</div>;
    }

    return (
      <ProjectDetail
        project={project}
        onBackClick={() => window.history.back()}
        innovations={innovations}
      />
    );
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <div className="flex-grow">
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
        <Footer />
      </div>
    </Router>
  );
}
