import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-forest.jpg";
import { useI18n } from "@/i18n/I18nContext";

const HeroSection = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Schwarzwald Natur – dunkler Tannenwald als Inspiration für nachhaltige Streetwear" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="relative z-10 container text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6">
          {t("hero.tagline")}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-foreground">SCHWARZWALD</span><br />
          <span className="text-gradient-moss">JUNGFRAU</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-10">
          {t("hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <Link to="/shop" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors">
            {t("hero.cta")}
          </Link>
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
