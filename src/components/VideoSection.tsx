import { motion } from "framer-motion";

const VideoSection = () => {
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
            Dirndelhoodie Pink – das Statement-Piece
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            src="/dirndelhoodie-pink-promo.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-video object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
