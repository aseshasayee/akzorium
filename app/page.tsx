import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process"; // Added
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";   // Added

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Process />    {/* Added */}
      <Projects />
      <Contact />
      <Footer />     {/* Added */}
    </main>
  );
}
