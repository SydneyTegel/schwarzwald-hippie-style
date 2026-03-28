import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    src: "/dirndelhoodie-pink-promo.mp4",
    label: "Dirndelhoodie Pink",
    subtitle: "Statement in Alpenrosa",
  },
  {
    src: "/forest-hoodie-promo.mp4",
    label: "Forest Hoodie",
    subtitle: "Born in the Forest",
  },
  {
    src: "/lederhosenhoodie-promo.mp4",
    label: "Lederhosenhoodie",
    subtitle: "Tracht trifft Streetwear",
  },
];

const VideoSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-3">
            Im Fokus
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Unsere Highlights in Bewegung
          </h2>
        </motion.div>

        {/* Video Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {videos.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 border ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <AnimatePresence mode="wait">
            <motion.video
              key={videos[active].src}
              src={videos[active].src}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full aspect-video object-cover"
            />
          </AnimatePresence>
        </motion.div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-muted-foreground mt-4 text-sm"
          >
            {videos[active].subtitle}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VideoSection;
