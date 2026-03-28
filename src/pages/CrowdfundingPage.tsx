import Navbar from "@/components/Navbar";
import CrowdfundSection from "@/components/CrowdfundSection";
import FooterSection from "@/components/FooterSection";

const CrowdfundingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <CrowdfundSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default CrowdfundingPage;
