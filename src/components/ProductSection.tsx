import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductGalleryModal from "./ProductGalleryModal";
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

// Detail images
import detailForestWomenCloseup from "@/assets/detail-foresthoodie-women-closeup.jpg";
import detailForestWomenBack from "@/assets/detail-foresthoodie-women-back.jpg";
import detailForestMenCloseup from "@/assets/detail-foresthoodie-men-closeup.jpg";
import detailForestMenBack from "@/assets/detail-foresthoodie-men-back.jpg";
import detailDirndelPinkCloseup from "@/assets/detail-dirndelhoodie-pink-closeup.jpg";
import detailDirndelPinkLifestyle from "@/assets/detail-dirndelhoodie-pink-lifestyle.jpg";
import detailLederhosenMenCloseup from "@/assets/detail-lederhosenhoodie-men-closeup.jpg";
import detailLederhosenMenLifestyle from "@/assets/detail-lederhosenhoodie-men-lifestyle.jpg";
import detailDirndelGreenCloseup from "@/assets/detail-dirndelhoodie-green-closeup.jpg";
import detailDirndelCloseup from "@/assets/detail-dirndelhoodie-closeup.jpg";
import detailDirndelVneckCloseup from "@/assets/detail-dirndelhoodie-vneck-closeup.jpg";
import detailLederhosenWomenCloseup from "@/assets/detail-lederhosenhoodie-women-closeup.jpg";
import detailTshirtMenCloseup from "@/assets/detail-tshirt-men-closeup.jpg";
import detailTshirtWomenCloseup from "@/assets/detail-tshirt-women-closeup.jpg";
import detailSweaterWomenCloseup from "@/assets/detail-sweater-women-closeup.jpg";
import detailSweaterMenCloseup from "@/assets/detail-sweater-men-closeup.jpg";

type FilterTag = "Alle" | "Damen" | "Herren" | "Dirndel" | "Forest" | "Lederhosen" | "T-Shirts" | "Sweater";

const filters: FilterTag[] = ["Alle", "Damen", "Herren", "Dirndel", "Forest", "Lederhosen", "T-Shirts", "Sweater"];

interface Product {
  name: string;
  price: string;
  category: string;
  image: string;
  images: string[];
  tags: string[];
  description: string;
  material: string;
}

const products: Product[] = [
  { name: "Forest Hoodie Frauen", price: "89 €", category: "Hoodies", image: hoodieImg, images: [hoodieImg, detailForestWomenCloseup, detailForestWomenBack], tags: ["Damen", "Forest"], description: "Oversized Mönchskutten-Hoodie mit tiefer Kapuze und gesticktem Tannen-Motiv. Inspiriert von den Wäldern des Schwarzwalds.", material: "100 % Bio-Baumwolle, 380 g/m² French Terry, gebürstetes Innenfleece" },
  { name: "Forest Hoodie Herren", price: "89 €", category: "Hoodies", image: foresthoodieMenImg, images: [foresthoodieMenImg, detailForestMenCloseup, detailForestMenBack], tags: ["Herren", "Forest"], description: "Maskuline Interpretation der Mönchskutte mit spitz zulaufender Kapuze und Wald-Stickerei auf der Brust.", material: "100 % Bio-Baumwolle, 380 g/m² French Terry, gebürstetes Innenfleece" },
  { name: "Forest Hoodie Herren Kurz", price: "79 €", category: "Hoodies", image: foresthoodieMenShortImg, images: [foresthoodieMenShortImg, detailForestMenCloseup], tags: ["Herren", "Forest"], description: "Kurz geschnittener Forest Hoodie auf Gürtelhöhe mit langen Ärmeln. Moderner Streetwear-Schnitt trifft auf Mönchskutten-Design.", material: "100 % Bio-Baumwolle, 350 g/m² French Terry" },
  { name: "Forest Hoodie Herren Avantgarde", price: "99 €", category: "Hoodies", image: foresthoodieMenCreativeImg, images: [foresthoodieMenCreativeImg, detailForestMenCloseup], tags: ["Herren", "Forest"], description: "Kreative Avantgarde-Version des Forest Hoodie mit asymmetrischem Schnitt und experimenteller Kapuzenform.", material: "95 % Bio-Baumwolle, 5 % Elastan, 400 g/m² Strukturjersey" },
  { name: "Dirndelhoodie Frauen", price: "109 €", category: "Hoodies", image: dirndelhoodieImg, images: [dirndelhoodieImg, detailDirndelCloseup], tags: ["Damen", "Dirndel"], description: "Der Original-Dirndelhoodie: Trachten-Mieder trifft Hoodie-Komfort. Mit Schnürung, Blumenstickerei und Schürzen-Element.", material: "Oberstoff: 95 % Baumwolle, 5 % Elastan. Schürze: 100 % Viskose" },
  { name: "Dirndelhoodie V-Neck Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodieVneckImg, images: [dirndelhoodieVneckImg, detailDirndelVneckCloseup], tags: ["Damen", "Dirndel"], description: "Elegante V-Ausschnitt-Variante mit Edelweiß-Stickerei entlang des Dekolletés und traditioneller Kordel-Schnürung.", material: "95 % Baumwolle, 5 % Elastan, 360 g/m² mit Satin-Einfassung" },
  { name: "Dirndelhoodie Grün & Spitze Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodieGreenImg, images: [dirndelhoodieGreenImg, detailDirndelGreenCloseup], tags: ["Damen", "Dirndel"], description: "Waldgrüner Dirndelhoodie mit weißer Klöppelspitze am Ausschnitt und filigrane Farn-Stickerei. Trifft Schwarzwälder Handwerk.", material: "100 % Bio-Baumwolle, 370 g/m². Spitze: Baumwoll-Klöppelspitze" },
  { name: "Dirndelhoodie Pink Frauen", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkImg, images: [dirndelhoodiePinkImg, detailDirndelPinkCloseup, detailDirndelPinkLifestyle], tags: ["Damen", "Dirndel"], description: "Statement-Piece in Alpenrosa mit traditioneller Schnürung, Dirndl-Schürze und floraler Stickerei.", material: "95 % Baumwolle, 5 % Elastan, 360 g/m². Schürze: Baumwoll-Batist" },
  { name: "Dirndelhoodie Pink Cropped", price: "109 €", category: "Hoodies", image: dirndelhoodiePinkCroppedImg, images: [dirndelhoodiePinkCroppedImg, detailDirndelPinkCloseup], tags: ["Damen", "Dirndel"], description: "Kurz geschnittene Variante des Pink Dirndelhoodie – perfekt zu High-Waist-Jeans oder Trachtenrock.", material: "95 % Baumwolle, 5 % Elastan, 340 g/m² Crop-Schnitt" },
  { name: "Dirndelhoodie Pink Puffärmel", price: "129 €", category: "Hoodies", image: dirndelhoodiePinkPuffImg, images: [dirndelhoodiePinkPuffImg, detailDirndelPinkCloseup], tags: ["Damen", "Dirndel"], description: "Romantische Puffärmel treffen auf Dirndl-Hoodie – voluminöse Schulterpartie mit traditioneller Mieder-Schnürung.", material: "100 % Bio-Baumwolle, 370 g/m². Ärmel: Doppellagig mit Organza-Einlage" },
  { name: "Dirndelhoodie Pink Oversized", price: "119 €", category: "Hoodies", image: dirndelhoodiePinkOversizedImg, images: [dirndelhoodiePinkOversizedImg, detailDirndelPinkCloseup], tags: ["Damen", "Dirndel"], description: "Lässig-weiter Oversized-Schnitt mit allen Dirndl-Details. Cozy meets Tracht.", material: "100 % Bio-Baumwolle, 400 g/m² Heavyweight French Terry" },
  { name: "Dirndelhoodie Pink Schnürung", price: "129 €", category: "Hoodies", image: dirndelhoodiePinkLaceupImg, images: [dirndelhoodiePinkLaceupImg, detailDirndelPinkCloseup], tags: ["Damen", "Dirndel"], description: "Aufwendige Korsett-Schnürung über die gesamte Front – unser aufwändigstes Dirndelhoodie-Design.", material: "95 % Baumwolle, 5 % Elastan, 370 g/m². Ösen: Antik-Messing" },
  { name: "Dirndelhoodie Pink Cape", price: "99 €", category: "Hoodies", image: dirndelhoodiePinkCapeImg, images: [dirndelhoodiePinkCapeImg, detailDirndelPinkCloseup], tags: ["Damen", "Dirndel"], description: "Cape-Poncho-Variante des Dirndelhoodie – fließender Überwurf mit Kapuze und Dirndl-Akzenten.", material: "100 % Bio-Baumwolle, 320 g/m² leichter French Terry" },
  { name: "Lederhosenhoodie Frauen", price: "129 €", category: "Hoodies", image: lederhosenhoodieImg, images: [lederhosenhoodieImg, detailLederhosenWomenCloseup], tags: ["Damen", "Lederhosen"], description: "Feminin geschnittener Lederhosen-Hoodie mit Wildleder-Optik-Panels, Hirschgeweih-Verschlüssen und Trachtenstickerei.", material: "Hoodie: 100 % Bio-Baumwolle, 380 g/m². Panels: Veganes Wildleder (Polyester/PU)" },
  { name: "Lederhosenhoodie Herren", price: "129 €", category: "Hoodies", image: lederhosenhoodieMenImg, images: [lederhosenhoodieMenImg, detailLederhosenMenCloseup, detailLederhosenMenLifestyle], tags: ["Herren", "Lederhosen"], description: "Braun-grüner Zweifarbton-Hoodie mit Hirschgeweih-Toggle-Verschlüssen, Wildleder-Optik und traditioneller Stickerei.", material: "Hoodie: 100 % Bio-Baumwolle, 400 g/m². Panels: Veganes Wildleder. Toggles: Geweih-Replik (Harz)" },
  { name: "Pine Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtPineTeeMenImg, images: [tshirtPineTeeMenImg, detailTshirtMenCloseup], tags: ["Herren", "T-Shirts"], description: "Minimalistisches T-Shirt mit gesticktem Kiefern-Motiv auf der Brust. Schwarzwald-Feeling für jeden Tag.", material: "100 % Bio-Baumwolle, 180 g/m² Single Jersey, enzymgewaschen" },
  { name: "Schwarzwald Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtMen1Img, images: [tshirtMen1Img, detailTshirtMenCloseup], tags: ["Herren", "T-Shirts"], description: "T-Shirt mit detailliertem Schwarzwald-Panorama-Print. Berg- und Waldsilhouette auf der Brust.", material: "100 % Bio-Baumwolle, 180 g/m² Single Jersey, enzymgewaschen" },
  { name: "Mountain Tee Herren", price: "49 €", category: "T-Shirts", image: tshirtMen2Img, images: [tshirtMen2Img, detailTshirtMenCloseup], tags: ["Herren", "T-Shirts"], description: "Gebirgssilhouette als aufwändiger Print – inspiriert von den Gipfeln des Schwarzwalds.", material: "100 % Bio-Baumwolle, 180 g/m² Single Jersey, enzymgewaschen" },
  { name: "Wildblumen Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen1Img, images: [tshirtWomen1Img, detailTshirtWomenCloseup], tags: ["Damen", "T-Shirts"], description: "Botanischer Wildblumen-Print mit Schwarzwälder Wiesenblumen – handgezeichnete Illustration.", material: "100 % Bio-Baumwolle, 160 g/m² leichter Single Jersey, Relaxed Fit" },
  { name: "Hirschgeweih Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen2Img, images: [tshirtWomen2Img, detailTshirtWomenCloseup], tags: ["Damen", "T-Shirts"], description: "Elegantes Hirschgeweih-Motiv mit floralen Elementen – Natur trifft feminine Ästhetik.", material: "100 % Bio-Baumwolle, 160 g/m² leichter Single Jersey, Relaxed Fit" },
  { name: "Panorama Tee Frauen", price: "49 €", category: "T-Shirts", image: tshirtWomen3Img, images: [tshirtWomen3Img, detailTshirtWomenCloseup], tags: ["Damen", "T-Shirts"], description: "Weiter Panorama-Print über die gesamte Brust – Schwarzwälder Berglandschaft in sanften Tönen.", material: "100 % Bio-Baumwolle, 160 g/m² leichter Single Jersey, Relaxed Fit" },
  { name: "Moss Sweater Frauen", price: "79 €", category: "Sweater", image: sweaterImg, images: [sweaterImg, detailSweaterWomenCloseup], tags: ["Damen", "Sweater"], description: "Moosgrüner Rundhals-Sweater in cleaner Silhouette. Weiches Fleece-Innenfutter für maximalen Komfort.", material: "85 % Bio-Baumwolle, 15 % recyceltes Polyester, 320 g/m² Fleece-Futter" },
  { name: "Cable Knit Sweater Frauen", price: "89 €", category: "Sweater", image: sweaterWomen1Img, images: [sweaterWomen1Img, detailSweaterWomenCloseup], tags: ["Damen", "Sweater"], description: "Klassisches Zopfstrickmuster in Waldgrün – traditionelles Handwerk in modernem Schnitt.", material: "70 % Merinowolle, 30 % Bio-Baumwolle, Handwäsche empfohlen" },
  { name: "Tracht Sweater Frauen", price: "99 €", category: "Sweater", image: sweaterWomen2Img, images: [sweaterWomen2Img, detailSweaterWomenCloseup], tags: ["Damen", "Sweater"], description: "Trachten-inspirierter Strickpullover mit Edelweiß- und Hirsch-Intarsienmuster in warmen Erdtönen.", material: "80 % Merinowolle, 20 % Alpaka, Intarsien handgestrickt" },
  { name: "Forest Sweater Frauen", price: "89 €", category: "Sweater", image: sweaterWomen3Img, images: [sweaterWomen3Img, detailSweaterWomenCloseup], tags: ["Damen", "Sweater"], description: "Cremefarbener Pullover mit eingestricktem Wald-Muster – Tannensilhouetten in Ton-in-Ton-Technik.", material: "70 % Merinowolle, 30 % Bio-Baumwolle, 280 g/m²" },
  { name: "Cable Knit Sweater Herren", price: "89 €", category: "Sweater", image: sweaterMen1Img, images: [sweaterMen1Img, detailSweaterMenCloseup], tags: ["Herren", "Sweater"], description: "Schwerer Zopfstrick-Pullover in tiefem Waldgrün mit kontrastierenden Bündchen in Erdbraun.", material: "70 % Merinowolle, 30 % Bio-Baumwolle, 340 g/m²" },
  { name: "Mountain Sweater Herren", price: "89 €", category: "Sweater", image: sweaterMen2Img, images: [sweaterMen2Img, detailSweaterMenCloseup], tags: ["Herren", "Sweater"], description: "Robuster Pullover mit eingestricktem Bergpanorama – Schwarz-Grau-Grün-Töne für den urbanen Bergsteiger.", material: "60 % Merinowolle, 30 % Bio-Baumwolle, 10 % Nylon, 360 g/m²" },
];

const ProductSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("Alle");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
            Nachhaltige Hoodies, T-Shirts & Sweater
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
                onClick={() => setSelectedProduct(product)}
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
                  {product.images.length > 1 && (
                    <span className="absolute top-4 right-4 text-xs text-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      {product.images.length} Bilder
                    </span>
                  )}
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

      {/* Gallery Modal */}
      <ProductGalleryModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct?.name ?? ""}
        price={selectedProduct?.price ?? ""}
        images={selectedProduct?.images ?? []}
        description={selectedProduct?.description}
        material={selectedProduct?.material}
      />
    </section>
  );
};

export default ProductSection;
