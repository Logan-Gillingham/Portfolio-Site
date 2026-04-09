"use client";
import { use } from "react"; // 1. Import 'use'
import HomeBar from "@/components/HomeBar";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Unwrap the params promise
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  return (
    <main className="min-h-screen bg-white pb-32">
      <div className="max-w-4xl mx-auto pt-20 px-8">
        <h1 className="text-5xl font-black text-gray-800 uppercase italic mb-4">
          {slug.replace(/-/g, ' ')}
        </h1>
        <div className="h-1 w-20 bg-blue-400 mb-10" />

        <section className="text-xl text-gray-600 leading-relaxed">
          <p>This is the detailed view for {slug}.</p>
        </section>
      </div>

      <HomeBar />
    </main>
  );
}