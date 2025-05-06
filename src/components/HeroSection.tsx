import { Cpu, ArrowRight } from "lucide-react";

export function HeroSection(): JSX.Element {
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
            Foundry Hub is the playground where artificial intelligence and human creativity collide to unlock the next generation of software innovation. Sketch out your vision and watch our AI-powered engine transform it into working prototypes—complete with production-ready code, live previews, and intelligent suggestions—so you can iterate faster, learn more, and build with confidence. Whether you’re exploring new ideas or refining complex workflows, Foundry Hub removes the friction of setup and scaffolding, letting you focus on what really matters: turning imagination into impact. AI + imagination = innovation.
          </p>

          {/* CTA Button: bright by default, only animate on hover/click */}
          <button
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
