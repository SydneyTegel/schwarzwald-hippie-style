import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import FooterSection from "@/components/FooterSection";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ProductSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default ShopPage;
