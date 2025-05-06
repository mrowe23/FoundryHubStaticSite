import { Cpu, Zap, Database, Lightbulb } from "lucide-react";
import { IInnovation } from "@/interfaces/IInnovation";

export const innovationsData: IInnovation[] = [
  {
    id: "quantum-computing",
    title: "Quantum Computing",
    description: "Harnessing quantum mechanics principles to process information in revolutionary ways.",
    imageUrl: "/api/placeholder/400/300",
    infoLink: "/innovations/quantum-computing",
    githubLink: "https://github.com/foundry/quantum-research",
    icon: <Cpu className="text-cyan-400" size={28} />
  },
  {
    id: "neural-interfaces",
    title: "Neural Interfaces",
    description: "Direct communication pathways between the brain and external devices for enhanced human capabilities.",
    imageUrl: "/api/placeholder/400/300",
    infoLink: "/innovations/neural-interfaces",
    githubLink: "https://github.com/foundry/neural-research",
    icon: <Zap className="text-purple-400" size={28} />
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems",
    description: "Advanced architectures enabling resilient, scalable computing across decentralized networks.",
    imageUrl: "/api/placeholder/400/300",
    infoLink: "/innovations/distributed-systems",
    githubLink: "https://github.com/foundry/distributed-research",
    icon: <Database className="text-green-400" size={28} />
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Creating original content and solutions through advanced machine learning algorithms.",
    imageUrl: "/api/placeholder/400/300",
    infoLink: "/innovations/generative-ai",
    githubLink: "https://github.com/foundry/gen-ai-research",
    icon: <Lightbulb className="text-yellow-400" size={28} />
  }
];