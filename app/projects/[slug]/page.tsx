"use client";
import { use } from "react";
import HomeBar from "@/components/HomeBar";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Content for the About Me channel
  if (slug === "mii-channel") {
    return (
      <main className="min-h-screen bg-white pb-32">
        <div className="max-w-4xl mx-auto pt-20 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl font-black text-gray-800 uppercase italic mb-2">About Me</h1>
            <div className="h-2 w-32 bg-blue-400 mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column: Image/Mii placeholder */}
              <div className="aspect-square bg-gray-100 rounded-[3rem] border-4 border-gray-200 flex items-center justify-center text-8xl shadow-inner">
                👤
              </div>

              {/* Right Column: Bio */}
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>
                  Hey! I'm <span className="font-bold text-gray-900">Logan Gillingham</span>, 
                  a Junior Software Developer with a passion for cloud security and unique UI/UX experiences.
                </p>
                <p>
                  I enjoy bridging the gap between nostalgic aesthetics and modern 
                  tech stacks like Next.js, TypeScript, Javascript, and GCP.
                </p>
                
                <h3 className="text-2xl font-black text-gray-800 uppercase italic pt-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind", "Google Cloud", "Framer Motion"].map(skill => (
                    <span key={skill} className="px-4 py-1 bg-[#ebebeb] rounded-full text-sm font-bold text-gray-500 uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <HomeBar />
      </main>
    );
  }

  // Fallback for other projects
  return (
    <main className="min-h-screen bg-white pb-32 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black text-gray-300 uppercase italic">
        {slug.replace(/-/g, " ")} coming soon
      </h1>
      <HomeBar />
    </main>
  );
}