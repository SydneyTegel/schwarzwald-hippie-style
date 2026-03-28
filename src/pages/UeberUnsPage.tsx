import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import CrowdfundSection from "@/components/CrowdfundSection";
import FooterSection from "@/components/FooterSection";

const UeberUnsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <CrowdfundSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default UeberUnsPage;
