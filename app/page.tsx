import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoBackgroundWrapper from "@/components/VideoBackgroundWrapper";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AttentionHook from "@/components/AttentionHook";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative bg-black">
      <Navbar />
      <Hero />

      <VideoBackgroundWrapper>
        <About />
        <Process />
        <Services />
        <Pricing />
        <Projects />
        <TrustSection />
        <FAQ />
        <Contact />
        <Footer />
      </VideoBackgroundWrapper>
    </main>
  );
}
