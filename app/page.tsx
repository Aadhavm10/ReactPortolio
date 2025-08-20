
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Education from "@/components/main/Education";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Education />
        <Projects />
      </div>
    </main>
  );
}
