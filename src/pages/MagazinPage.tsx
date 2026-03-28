import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

const MagazinPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <BlogSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default MagazinPage;
