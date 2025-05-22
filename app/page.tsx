import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Home;