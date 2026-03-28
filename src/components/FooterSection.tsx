import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Link to="/" className="font-heading text-lg font-bold text-foreground">
              SCHWARZWALD<span className="text-primary">JUNGFRAU</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              Nachhaltige Streetwear aus dem Schwarzwald. © 2026
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <Link to="/lookbook" className="hover:text-foreground transition-colors">Lookbook</Link>
            <Link to="/magazin" className="hover:text-foreground transition-colors">Magazin</Link>
            <Link to="/ueber-uns" className="hover:text-foreground transition-colors">Über uns</Link>
          </nav>

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
