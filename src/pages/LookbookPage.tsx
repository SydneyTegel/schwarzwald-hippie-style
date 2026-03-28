import Navbar from "@/components/Navbar";
import LookbookSection from "@/components/LookbookSection";
import FooterSection from "@/components/FooterSection";

const LookbookPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <LookbookSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default LookbookPage;
