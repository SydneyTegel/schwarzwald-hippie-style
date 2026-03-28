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

const products = [
  { name: "Forest Hoodie", price: "89 €", category: "Hoodies", image: hoodieImg },
  { name: "Dirndelhoodie", price: "109 €", category: "Hoodies", image: dirndelhoodieImg },
  { name: "Dirndelhoodie V-Neck", price: "119 €", category: "Hoodies", image: dirndelhoodieVneckImg },
  { name: "Dirndelhoodie Grün & Spitze", price: "119 €", category: "Hoodies", image: dirndelhoodieGreenImg },
  { name: "Dirndelhoodie Pink", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkImg },
  { name: "Lederhosenhoodie", price: "129 €", category: "Hoodies", image: lederhosenhoodieImg },
  { name: "Lederhosenhoodie Herren", price: "129 €", category: "Hoodies", image: lederhosenhoodieMenImg },
  { name: "Pine Tee", price: "49 €", category: "T-Shirts", image: tshirtImg },
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
