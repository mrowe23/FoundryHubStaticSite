import { Cpu, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection(): JSX.Element {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Static accent circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-20" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full opacity-20" />

      <div className="relative container mx-auto px-4 py-32">
        <div className="text-center">
          {/* Static ring behind the icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 opacity-40" />
              </div>
              <Cpu size={80} className="text-white relative z-10" />
            </div>
          </div>

          {/* Bold title matching button gradient */}
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              Foundry Hub
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-6">
            Foundry Hub is the playground where artificial intelligence and human creativity collide to unlock the next generation of software innovation.
          </p>

          {/* CTA Button: Navigate to /learnmore */}
          <button
            onClick={() => navigate("/learnmore")} // Navigate to /learnmore on click
            className="
              group
              inline-flex items-center
              bg-gradient-to-r from-blue-500 to-blue-700
              text-white
              px-10 py-4
              rounded-lg
              font-bold
              transition
              transform
              hover:scale-105
              hover:animate-pulse
              active:animate-ping
              drop-shadow-xl
              ring-2 ring-blue-500
            "
          >
            Learn More
            <ArrowRight
              size={20}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}