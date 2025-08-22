
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Education from "@/components/main/Education";
import Footer from "@/components/main/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Education />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
