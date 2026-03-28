import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hoodieImg from "@/assets/product-hoodie.jpg";
import tshirtImg from "@/assets/product-tshirt.jpg";
import sweaterImg from "@/assets/product-sweater.jpg";
import dirndelhoodieImg from "@/assets/product-dirndelhoodie.jpg";
import dirndelhoodieVneckImg from "@/assets/product-dirndelhoodie-vneck.jpg";
import lederhosenhoodieImg from "@/assets/product-lederhosenhoodie.jpg";
import lederhosenhoodieMenImg from "@/assets/product-lederhosenhoodie-men.jpg";
import dirndelhoodieGreenImg from "@/assets/product-dirndelhoodie-green.jpg";
import dirndelhoodiePinkImg from "@/assets/product-dirndelhoodie-pink.jpg";
import dirndelhoodiePinkCroppedImg from "@/assets/product-dirndelhoodie-pink-cropped.jpg";
import dirndelhoodiePinkPuffImg from "@/assets/product-dirndelhoodie-pink-puff.jpg";
import dirndelhoodiePinkOversizedImg from "@/assets/product-dirndelhoodie-pink-oversized.jpg";
import dirndelhoodiePinkLaceupImg from "@/assets/product-dirndelhoodie-pink-laceup.jpg";
import dirndelhoodiePinkCapeImg from "@/assets/product-dirndelhoodie-pink-cape.jpg";
import foresthoodieMenImg from "@/assets/product-foresthoodie-men.jpg";
import foresthoodieMenShortImg from "@/assets/product-foresthoodie-men-short.jpg";
import foresthoodieMenCreativeImg from "@/assets/product-foresthoodie-men-creative.jpg";
import tshirtMen1Img from "@/assets/product-tshirt-men-1.jpg";
import tshirtMen2Img from "@/assets/product-tshirt-men-2.jpg";
import tshirtWomen1Img from "@/assets/product-tshirt-women-1.jpg";
import tshirtWomen2Img from "@/assets/product-tshirt-women-2.jpg";
import tshirtWomen3Img from "@/assets/product-tshirt-women-3.jpg";
import tshirtPineTeeMenImg from "@/assets/product-tshirt-pinetee-men.jpg";
import sweaterWomen1Img from "@/assets/product-sweater-women-1.jpg";
import sweaterWomen2Img from "@/assets/product-sweater-women-2.jpg";
import sweaterWomen3Img from "@/assets/product-sweater-women-3.jpg";
import sweaterMen1Img from "@/assets/product-sweater-men-1.jpg";
import sweaterMen2Img from "@/assets/product-sweater-men-2.jpg";

type FilterTag = "Alle" | "Damen" | "Herren" | "Dirndel" | "Forest" | "Lederhosen" | "T-Shirts" | "Sweater";

const filters: FilterTag[] = ["Alle", "Damen", "Herren", "Dirndel", "Forest", "Lederhosen", "T-Shirts", "Sweater"];

const products = [
  { name: "Forest Hoodie Frauen", price: "89 €", category: "Hoodies", image: hoodieImg, tags: ["Damen", "Forest"] },
  { name: "Forest Hoodie Herren", price: "89 €", category: "Hoodies", image: foresthoodieMenImg, tags: ["Herren", "Forest"] },
  { name: "Forest Hoodie Herren Kurz", price: "79 €", category: "Hoodies", image: foresthoodieMenShortImg, tags: ["Herren", "Forest"] },
  { name: "Forest Hoodie Herren Avantgarde", price: "99 €", category: "Hoodies", image: foresthoodieMenCreativeImg, tags: ["Herren", "Forest"] },
  { name: "Dirndelhoodie Frauen", price: "109 €", category: "Hoodies", image: dirndelhoodieImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie V-Neck Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodieVneckImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Grün & Spitze Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodieGreenImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Pink Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Pink Cropped", price: "109 €", category: "Hoodies", image: dirndelhoodiePinkCroppedImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Pink Puffärmel", price: "129 €", category: "Hoodies", image: dirndelhoodiePinkPuffImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Pink Oversized", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkOversizedImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Pink Schnürung", price: "129 €", category: "Hoodies", image: dirndelhoodiePinkLaceupImg, tags: ["Damen", "Dirndel"] },
  { name: "Dirndelhoodie Pink Cape", price: "99 €", category: "Hoodies", image: dirndelhoodiePinkCapeImg, tags: ["Damen", "Dirndel"] },
  { name: "Lederhosenhoodie Frauen", price: "129 €", category: "Hoodies", image: lederhosenhoodieImg, tags: ["Damen", "Lederhosen"] },
  { name: "Lederhosenhoodie Herren", price: "129 €", category: "Hoodies", image: lederhosenhoodieMenImg, tags: ["Herren", "Lederhosen"] },
  { name: "Pine Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtPineTeeMenImg, tags: ["Herren", "T-Shirts"] },
  { name: "Schwarzwald Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtMen1Img, tags: ["Herren", "T-Shirts"] },
  { name: "Mountain Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtMen2Img, tags: ["Herren", "T-Shirts"] },
  { name: "Wildblumen Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen1Img, tags: ["Damen", "T-Shirts"] },
  { name: "Hirschgeweih Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen2Img, tags: ["Damen", "T-Shirts"] },
  { name: "Panorama Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen3Img, tags: ["Damen", "T-Shirts"] },
  { name: "Moss Sweater", price: "79 €", category: "Sweater", image: sweaterImg, tags: ["Damen"] },
];

const ProductSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("Alle");

  const filteredProducts = activeFilter === "Alle"
    ? products
    : products.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Neue Kollektion
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Unsere Pieces
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
              }`}
            >
              {filter}
              <span className="ml-1.5 text-xs opacity-60">
                {filter === "Alle"
                  ? products.length
                  : products.filter((p) => p.tags.includes(filter)).length}
              </span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-card mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-widest text-primary bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">{product.name}</h3>
                  <span className="text-amber font-medium whitespace-nowrap">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
