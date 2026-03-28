import { motion } from "framer-motion";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import lookbookUrban1 from "@/assets/lookbook-urban-1.jpg";
import lookbookUrban2 from "@/assets/lookbook-urban-2.jpg";
import lookbookUrban3 from "@/assets/lookbook-urban-3.jpg";
import lookbookUrban4 from "@/assets/lookbook-urban-4.jpg";
import lookbookUrban5 from "@/assets/lookbook-urban-5.jpg";
import lookbookUrban6 from "@/assets/lookbook-urban-6.jpg";

const images = [
  { src: lookbookUrban1, alt: "Forest Hoodie Frauen – Stuttgart Königstraße", span: "row-span-2" },
  { src: lookbookUrban2, alt: "Forest Hoodie Herren – Berlin Oberbaumbrücke", span: "col-span-2" },
  { src: lookbookUrban5, alt: "Dirndelhoodie Pink Frauen – Stuttgart City", span: "row-span-2" },
  { src: lookbookUrban3, alt: "Forest Hoodie Herren – Köln Ehrenfeld", span: "row-span-2" },
  { src: lookbookUrban6, alt: "Dirndelhoodie Pink Frauen – Café in Köln", span: "col-span-2" },
  { src: lookbookUrban4, alt: "Forest Hoodies – Berlin Kreuzberg", span: "col-span-2" },
  { src: lookbook1, alt: "Dirndelhoodie Grün & Spitze – Schwarzwald Trail", span: "row-span-2" },
  { src: lookbook2, alt: "Dirndelhoodie Pink & Lederhosenhoodie – Golden Hour am See", span: "col-span-2" },
  { src: lookbook3, alt: "Lederhosenhoodie Herren – Nebelwald", span: "row-span-2" },
  { src: lookbook4, alt: "Dirndelhoodie V-Neck – Waldhütte", span: "col-span-2" },
];

const LookbookSection = () => {
  return (
    <section id="lookbook" className="py-20 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Lookbook
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Unsere Pieces zwischen Schwarzwald und City – wo Streetwear auf Natur trifft.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${img.span} rounded-xl overflow-hidden group relative`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-medium text-foreground">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
