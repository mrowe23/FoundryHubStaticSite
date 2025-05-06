import { IProject } from "@/interfaces/iProject";

export const projectsData: IProject[] = [
  {
    id: 1,
    slug: "quantum-forge",
    title: "Quantum Forge",
    description: "A quantum computing simulation environment with interactive tutorials and visualization tools.",
    longDescription:
      "Quantum Forge is a comprehensive platform for learning and experimenting with quantum computing concepts. It offers intuitive visualizations of quantum states, interactive circuit builders, and step-by-step tutorials suitable for beginners and advanced users alike. The platform includes simulation tools that accurately model quantum behavior while remaining accessible to those new to the field.",
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Quantum Computing", "Education", "Simulation"],
    github: "https://github.com/foundry/quantum-forge",
  },
  {
    id: 2,
    slug: "neural-nexus",
    title: "Neural Nexus",
    description: "An open-source framework for creating and training neural networks with a visual interface.",
    longDescription:
      "Neural Nexus provides a powerful yet user-friendly interface for designing, training, and deploying neural networks. The framework abstracts away much of the complexity while still allowing deep customization for advanced users. Features include drag-and-drop network architecture design, automated hyperparameter tuning, and comprehensive visualization tools for better understanding model behavior and performance.",
    image:
      "https://images.pexels.com/photos/31177212/pexels-photo-31177212.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Machine Learning", "Neural Networks", "Visualization"],
    github: "https://github.com/foundry/neural-nexus",
  },
  {
    id: 3,
    slug: "blockchain-beacon",
    title: "Blockchain Beacon",
    description: "A lightweight blockchain explorer with analytics and smart contract validation tools.",
    longDescription:
      "Blockchain Beacon offers a clean, intuitive interface for exploring blockchain data across multiple networks. Beyond basic transaction and block exploration, it provides advanced analytics, gas optimization recommendations, and smart contract validation tools. The platform makes blockchain data accessible to both technical and non-technical users through customizable dashboards and clear visualizations.",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Blockchain", "Analytics", "Explorer"],
    github: "https://github.com/foundry/blockchain-beacon",
  },
  {
    id: 4,
    slug: "eco-metrics",
    title: "Eco Metrics",
    description: "Environmental monitoring platform with IoT integration and predictive analytics.",
    longDescription:
      "Eco Metrics combines IoT sensor data with machine learning to provide comprehensive environmental monitoring solutions. The platform collects data from distributed sensors, processes it through custom analytics pipelines, and generates actionable insights about environmental conditions. Features include anomaly detection, trend analysis, and predictive models that help users understand and respond to changing environmental conditions.",
    image:
      "https://images.pexels.com/photos/14016664/pexels-photo-14016664.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["IoT", "Environmental", "Analytics"],
    github: "https://github.com/foundry/eco-metrics",
  },
  {
    id: 5,
    slug: "dev-dimension",
    title: "Dev Dimension",
    description: "A collaborative development environment with integrated version control and CI/CD pipelines.",
    longDescription:
      "Dev Dimension reimagines the development workflow by creating a seamless, collaborative environment that integrates coding, testing, version control, and deployment. The platform features real-time collaboration tools, automated code quality checks, and customizable CI/CD pipelines that adapt to team needs. Its unified interface eliminates context switching and streamlines the development process from ideation to production.",
    image:
      "https://images.pexels.com/photos/6424588/pexels-photo-6424588.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Development", "Collaboration", "DevOps"],
    github: "https://github.com/foundry/dev-dimension",
  },
];
