import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="kontakt" className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-heading text-lg font-bold text-foreground">
              SCHWARZWALD<span className="text-primary">JUNGFRAU</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Streetwear aus dem Schwarzwald. © 2026
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:grotesk@grotesk.de?subject=Schwarzwaldjungfrau.de" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              hello@schwarzwaldjungfrau.de
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
