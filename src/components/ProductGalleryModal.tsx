import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  price: string;
  images: string[];
  description?: string;
  material?: string;
}

const ProductGalleryModal = ({ isOpen, onClose, productName, price, images, description, material }: ProductGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image area */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-secondary/30">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${productName} - Bild ${currentIndex + 1}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Dots */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex ? "bg-primary w-6" : "bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Info sidebar */}
            <div className="md:w-80 p-6 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none">
              <h3 className="font-heading text-xl font-bold text-foreground mb-1">{productName}</h3>
              <span className="text-amber font-medium text-lg mb-4">{price}</span>

              {description && (
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              )}

              {material && (
                <div className="mb-5 p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1.5">Material</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{material}</p>
                </div>
              )}

              {images.length > 1 && (
                <div className="grid grid-cols-3 md:grid-cols-2 gap-2 mt-auto pt-4 border-t border-border">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        i === currentIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full aspect-square object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductGalleryModal;
