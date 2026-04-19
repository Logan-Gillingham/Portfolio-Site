"use client";
import { use } from "react";
import HomeBar from "@/components/HomeBar";
import { motion } from "framer-motion";
import { Award, User, FileText, Layout, ArrowLeft } from "lucide-react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Content for the About Me channel
  if (slug === "mii-channel") {
  return (
    <main className="min-h-screen bg-[#f4f4f4] pb-20">
      <div className="max-w-4xl mx-auto pt-20 px-6 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center"
        >
          {/* The Photo Container */}
          <div className="relative mb-8">
            {/* Soft Wii-style Glow behind the photo */}
            <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full animate-pulse" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-gray-200"
            >
              <img 
                src="/screenshot.png" 
                alt="Logan Gillingham" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <h1 className="text-5xl font-black text-gray-800 uppercase italic tracking-tighter mb-2">
            Logan Gillingham
          </h1>
          <p className="text-blue-500 font-black uppercase tracking-widest text-sm mb-8">
            Junior Software Developer
          </p>

          <div className="bg-white p-8 rounded-[3rem] shadow-lg max-w-2xl border-4 border-white">
            <p className="text-gray-600 leading-relaxed font-medium">
              I’m a software developer with a focus on Cloud Security and Creative UI. 
              Whether it’s building nostalgic Nintendo-inspired 
              web experiences or experimenting with new things, I love bridging the gap between deep technical infrastructure 
              and playful user interaction.
            </p>
          </div>
        </motion.div>
      </div>
      <HomeBar />
    </main>
  );
}

  if (slug === "certifications") {
  const certs = [
    { name: "Google CyberSecurity", date: "2026", color: "from-blue-400 to-blue-600" },
    { name: "AWS Cloud Architect", date: "2025", color: "from-purple-500 to-indigo-600" },
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f4] pb-32">
      <div className="max-w-6xl mx-auto pt-16 px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl font-black text-gray-800 uppercase italic mb-2 tracking-tighter">
            Certification Room
          </h1>
          <div className="h-2 w-48 bg-blue-500 mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-xl border-4 border-white relative overflow-hidden group"
              >
                {/* Visual "Trophy" Circle */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} mb-6 flex items-center justify-center text-white shadow-lg`}>
                  <Award size={40} />
                </div>

                <h3 className="text-2xl font-black text-gray-800 leading-tight mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
                  Achieved {cert.date}
                </p>

                {/* Decorative Wii-style glow */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 group-hover:scale-150 transition-transform" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <HomeBar />
    </main>
  );
}

if (slug === "resume") {
  return (
    <main className="min-h-screen bg-[#ebebeb] pb-20">
      <div className="max-w-5xl mx-auto pt-12 px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-5xl font-black text-gray-800 uppercase italic tracking-tighter">
                Resume
              </h1>
              <div className="h-2 w-32 bg-blue-500 mt-2" />
            </div>

            {/* Download Button for Recruiters */}
            <a 
              href="/resume.pdf" 
              download 
              className="bg-white border-4 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-black uppercase italic hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-95"
            >
              Download PDF
            </a>
          </div>

          {/* PDF Viewer Container */}
          <div className="w-full bg-white rounded-[3rem] shadow-2xl border-[12px] border-white overflow-hidden aspect-[1/1.4] md:aspect-auto md:h-[850px]">
            <iframe
              src="/resume.pdf#toolbar=0"
              className="w-full h-full border-none"
              title="Logan Gillingham Resume"
            />
          </div>
          
        </motion.div>
      </div>
      <HomeBar />
    </main>
  );
}

if (slug === "contact") {
  return (
    <main className="min-h-screen bg-[#f0f0f0] pb-20">
      <div className="max-w-3xl mx-auto pt-16 px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-[3rem] p-10 shadow-xl border-8 border-white">
          <h1 className="text-4xl font-black text-gray-800 uppercase italic mb-8">Send a Message</h1>
          
          <form action="/api/send" method="POST" className="space-y-6">
            <div>
              <label className="block font-bold text-gray-400 uppercase text-xs mb-2 ml-4">Your Name</label>
              <input name="name" type="text" required className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:ring-4 focus:ring-blue-200 transition-all outline-none text-gray-700" />
            </div>
            <div>
              <label className="block font-bold text-gray-400 uppercase text-xs mb-2 ml-4">Email Address</label>
              <input name="email" type="email" required className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:ring-4 focus:ring-blue-200 transition-all outline-none text-gray-700" />
            </div>
            <div>
              <label className="block font-bold text-gray-400 uppercase text-xs mb-2 ml-4">Message</label>
              <textarea name="message" rows={5} required className="w-full p-4 bg-gray-100 rounded-2xl border-none focus:ring-4 focus:ring-blue-200 transition-all outline-none text-gray-700 resize-none" />
            </div>
            
            <button type="submit" className="w-full bg-blue-500 py-6 rounded-full text-white font-black uppercase text-xl italic shadow-lg hover:bg-blue-600 active:scale-95 transition-all">
              Post to Message Board
            </button>
          </form>
        </motion.div>
      </div>
      <HomeBar />
    </main>
  );
}

if (slug === "projects") {
  const myProjects = [
    {
      title: "Online Store",
      desc: "A old school final project.",
      tech: ["HTML", "API", "CSS"],
      link: "https://github.com/Logan-Gillingham/Sprint-Final",
      image: "/filler.jpg"
    },
    {
      title: "Wii Portfolio Template",
      desc: "The very site you are looking at right now!",
      tech: ["Next.js", "Framer Motion"],
      link: "https://github.com/Logan-Gillingham/Portfolio-Site",
      image: "/page.png"
    },
  ];

  return (
    <main className="min-h-screen bg-white pb-32">
      <div className="max-w-6xl mx-auto pt-16 px-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <h1 className="text-6xl font-black text-gray-800 uppercase italic mb-2 tracking-tighter">
            Select Software
          </h1>
          <div className="h-2 w-64 bg-blue-400 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {myProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative bg-[#f0f0f0] rounded-[3rem] overflow-hidden border-4 border-transparent hover:border-blue-400 transition-all shadow-xl"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> 
                   
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-black text-gray-800 uppercase italic leading-none">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-500 font-medium mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white rounded-full text-[10px] font-black uppercase text-gray-400 border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full py-4 bg-blue-500 rounded-full text-white font-black uppercase italic shadow-lg hover:bg-blue-600 active:scale-95 transition-all"
                  >
                    Start Project
                  </button>
                </div>
              </motion.div>
            ))}
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