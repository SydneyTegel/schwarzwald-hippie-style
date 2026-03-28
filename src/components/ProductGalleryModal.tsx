import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n/I18nContext";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

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
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const { t } = useI18n();

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(t("products.selectSize"));
      return;
    }
    setAdded(true);
    toast.success(`${productName} (${selectedSize}) ${t("products.addedToast")}`);
    setTimeout(() => setAdded(false), 2000);
  };

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
            className="relative w-full max-w-5xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground transition-colors bg-background/50 backdrop-blur-sm rounded-full p-1.5"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Image area */}
            <div className="relative flex-1 bg-secondary/30 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={productName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm text-foreground rounded-full p-2 hover:bg-background/90 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm text-foreground rounded-full p-2 hover:bg-background/90 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
              )}

              {material && (
                <div className="mb-5 p-3 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-xs uppercase tracking-widest text-primary font-medium mb-1.5">{t("products.material")}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{material}</p>
                </div>
              )}

              {/* Size selector */}
              <div className="mb-5">
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">{t("products.sizes")}</p>
                <div className="grid grid-cols-6 gap-1.5">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-md text-xs font-medium transition-all border ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-foreground border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to cart button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    {t("products.added")}
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    {t("products.addToCart")}
                  </>
                )}
              </button>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="grid grid-cols-3 md:grid-cols-2 gap-2 mt-5 pt-4 border-t border-border">
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
