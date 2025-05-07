import { IProject } from "@/interfaces/iProject";

export const projectsData: IProject[] = [
  {
    id: 1,
    slug: "cognitive-load-heatmap",
    title: "Cognitive Load Heatmap",
    description: "Lightweight Flask app that analyzes UI screenshots with OmniParserV2 to produce cognitive load heatmaps",
    longDescription: `# UI Cognitive Load Analyzer
  
  A lightweight Flask application that uses Microsoft's OmniParserV2 Foundry model to analyze UI screenshots, detect elements, and generate cognitive load heatmaps.
  
  ## Features
  
  - **UI Element Detection**: Leverages OmniParserV2 to identify text, buttons, and interactive elements  
  - **Cognitive Load Analysis**: Evaluates element density, text complexity, and interactive element proximity  
  - **Heatmap Visualization**: Generates color-coded overlays highlighting areas of high cognitive load  
  - **Modern Glass UI**: Dark-themed interface with drag-and-drop functionality`,
    image: "https://raw.githubusercontent.com/stasgora/round-spot/master/assets/banner.png", // replace with your actual image path
    tags: ["Flask", "OmniParserV2", "Azure AI Foundry", "UI Analysis", "Heatmap"],
    github: "https://github.com/your-org/cognitive-load-heatmap", // update to your repo URL
    innovations: ["omniparserv2"],
  },
  {
    id: 1,
    slug: "quantum-forge",
    title: "Quantum Forge",
    description: "A quantum computing simulation environment with interactive tutorials and visualization tools.",
    longDescription: "Quantum Forge is a comprehensive platform for learning and experimenting with quantum computing concepts. It offers intuitive visualizations of quantum states, interactive circuit builders, and step-by-step tutorials suitable for beginners and advanced users alike. The platform includes simulation tools that accurately model quantum behavior while remaining accessible to those new to the field.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHF1YW50dW0lMjBjb21wdXRpbmd8ZW58MHx8fHwxNjgzNjY5NzYx&ixlib=rb-4.0.3&q=80&w=600",
    tags: ["Quantum Computing", "Education", "Simulation"],
    innovations: ["quantum-computing", "generative-ai"],
    github: "https://github.com/foundry/quantum-forge"
  },
  {
    id: 2,
    slug: "neural-nexus",
    title: "Neural Nexus",
    description: "An open-source framework for creating and training neural networks with a visual interface.",
    longDescription: "Neural Nexus provides a powerful yet user-friendly interface for designing, training, and deploying neural networks. The framework abstracts away much of the complexity while still allowing deep customization for advanced users. Features include drag-and-drop network architecture design, automated hyperparameter tuning, and comprehensive visualization tools for better understanding model behavior and performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5ldXJhbCUyMG5ldHdvcmtzfGVufDB8fHx8MTY4MzY2OTc2MQ&ixlib=rb-4.0.3&q=80&w=600",
    tags: ["Machine Learning", "Neural Networks", "Visualization"],
    innovations: ["neural-interfaces", "generative-ai"],
    github: "https://github.com/foundry/neural-nexus"
  },
  {
    id: 3,
    slug: "blockchain-beacon",
    title: "Blockchain Beacon",
    description: "A lightweight blockchain explorer with analytics and smart contract validation tools.",
    longDescription: "Blockchain Beacon offers a clean, intuitive interface for exploring blockchain data across multiple networks. Beyond basic transaction and block exploration, it provides advanced analytics, gas optimization recommendations, and smart contract validation tools. The platform makes blockchain data accessible to both technical and non-technical users through customizable dashboards and clear visualizations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tags: ["Blockchain", "Analytics", "Explorer"],
    innovations: ["distributed-systems"],
    github: "https://github.com/foundry/blockchain-beacon"
  },
  {
    id: 4,
    slug: "eco-metrics",
    title: "Eco Metrics",
    description: "Environmental monitoring platform with IoT integration and predictive analytics.",
    longDescription: "Eco Metrics combines IoT sensor data with machine learning to provide comprehensive environmental monitoring solutions. The platform collects data from distributed sensors, processes it through custom analytics pipelines, and generates actionable insights about environmental conditions. Features include anomaly detection, trend analysis, and predictive models that help users understand and respond to changing environmental conditions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGlvdCUyMGVudmlyb25tZW50fGVufDB8fHx8MTY4MzY2OTc2MQ&ixlib=rb-4.0.3&q=80&w=600",
    tags: ["IoT", "Environmental", "Analytics"],
    innovations: ["distributed-systems", "generative-ai"],
    github: "https://github.com/foundry/eco-metrics"
  },
  {
    id: 5,
    slug: "dev-dimension",
    title: "Dev Dimension",
    description: "A collaborative development environment with integrated version control and CI/CD pipelines.",
    longDescription: "Dev Dimension reimagines the development workflow by creating a seamless, collaborative environment that integrates coding, testing, version control, and deployment. The platform features real-time collaboration tools, automated code quality checks, and customizable CI/CD pipelines that adapt to team needs. Its unified interface eliminates context switching and streamlines the development process from ideation to production.",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    tags: ["Development", "Collaboration", "DevOps"],
    innovations: ["distributed-systems", "neural-interfaces"],
    github: "https://github.com/foundry/dev-dimension"
  }
];