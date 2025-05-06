import React, { useEffect } from "react";
import { ChevronLeft, Code as CodeIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function LearnMorePage(): JSX.Element {
  const navigate = useNavigate(); // Initialize navigate function

  // Scroll to top when this page is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="flex items-center text-gray-400 hover:text-white mb-6 group"
      >
        <ChevronLeft className="mr-1 group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      {/* Main Card */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-4">
          <CodeIcon size={24} className="text-cyan-400 mr-2" />
          <h1 className="text-3xl font-bold text-white">Learn More</h1>
        </div>
        <p className="text-gray-300 mb-6">
          Foundry Hub bridges AI and coding to accelerate prototyping. Follow these steps to get started:
        </p>

        {/* 1. Install */}
        <h2 className="text-2xl font-semibold text-white mb-2">1. Install the CLI</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto mb-6">
          <code>npm install -g foundry-hub-cli</code>
        </pre>

        {/* 2. Initialize */}
        <h2 className="text-2xl font-semibold text-white mb-2">2. Initialize a Project</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto mb-6">
          <code>foundry-hub init my-awesome-project</code>
        </pre>

        {/* 3. Usage in Code */}
        <h2 className="text-2xl font-semibold text-white mb-2">3. Use in Your Code</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto mb-6">
          <code>{`import { initFoundryHub } from 'foundry-hub';

const app = initFoundryHub({
  apiKey: 'YOUR_API_KEY',
});

app.generatePrototype({
  name: 'DemoApp',
  description: 'AI-powered prototype',
});`}</code>
        </pre>

        {/* Call to Action */}
        <button className="mt-4 inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:brightness-110 transition">
          Start Now
          <ArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
}