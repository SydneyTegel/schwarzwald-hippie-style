import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProductSection from "@/components/ProductSection";
import LookbookSection from "@/components/LookbookSection";
import BlogSection from "@/components/BlogSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <ProductSection />
      <LookbookSection />
      <BlogSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
