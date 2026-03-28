import { motion } from "framer-motion";
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

const products = [
  { name: "Forest Hoodie Frauen", price: "89 €", category: "Hoodies", image: hoodieImg },
  { name: "Forest Hoodie Herren", price: "89 €", category: "Hoodies", image: foresthoodieMenImg },
  { name: "Forest Hoodie Herren Kurz", price: "79 €", category: "Hoodies", image: foresthoodieMenShortImg },
  { name: "Forest Hoodie Herren Avantgarde", price: "99 €", category: "Hoodies", image: foresthoodieMenCreativeImg },
  { name: "Dirndelhoodie Frauen", price: "109 €", category: "Hoodies", image: dirndelhoodieImg },
  { name: "Dirndelhoodie V-Neck Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodieVneckImg },
  { name: "Dirndelhoodie Grün & Spitze Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodieGreenImg },
  { name: "Dirndelhoodie Pink Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkImg },
  { name: "Dirndelhoodie Pink Cropped", price: "109 €", category: "Hoodies", image: dirndelhoodiePinkCroppedImg },
  { name: "Dirndelhoodie Pink Puffärmel", price: "129 €", category: "Hoodies", image: dirndelhoodiePinkPuffImg },
  { name: "Dirndelhoodie Pink Oversized", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkOversizedImg },
  { name: "Dirndelhoodie Pink Schnürung", price: "129 €", category: "Hoodies", image: dirndelhoodiePinkLaceupImg },
  { name: "Dirndelhoodie Pink Cape", price: "99 €", category: "Hoodies", image: dirndelhoodiePinkCapeImg },
  { name: "Lederhosenhoodie Frauen", price: "129 €", category: "Hoodies", image: lederhosenhoodieImg },
  { name: "Lederhosenhoodie Herren", price: "129 €", category: "Hoodies", image: lederhosenhoodieMenImg },
  { name: "Pine Tee", price: "49 €", category: "T-Shirts", image: tshirtImg },
  { name: "Schwarzwald Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtMen1Img },
  { name: "Mountain Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtMen2Img },
  { name: "Wildblumen Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen1Img },
  { name: "Hirschgeweih Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen2Img },
  { name: "Panorama Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen3Img },
  { name: "Moss Sweater", price: "79 €", category: "Sweater", image: sweaterImg },
];

const ProductSection = () => {
  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Neue Kollektion
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Unsere Pieces
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
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
                <h3 className="font-heading font-semibold text-foreground">{product.name}</h3>
                <span className="text-amber font-medium">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
