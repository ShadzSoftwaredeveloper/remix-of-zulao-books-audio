import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "eBooks", href: "/ebooks" },
  { label: "Audio", href: "/audio" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-1">Zuula Obusobozibwo</h3>
            <div className="w-10 h-0.5 bg-secondary mb-4" />
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Empowering You To Impact Generations. Unlock your gifts, influence, and destiny for God's Kingdom through transformative books and audio teachings.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-1">Explore</h3>
            <div className="w-10 h-0.5 bg-secondary mb-4" />
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-1">Newsletter</h3>
            <div className="w-10 h-0.5 bg-secondary mb-4" />
            <p className="font-body text-sm text-background/60 mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-l-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 font-body text-sm focus:outline-none focus:border-secondary"
              />
              <button className="px-5 py-2.5 rounded-r-lg bg-background/20 text-background font-body text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors border border-l-0 border-background/20">
                Subscribe
              </button>
            </div>
            <p className="font-body text-xs text-background/40 mt-2">
              By subscribing, you consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Zuula Obusobozibwo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-xs text-background/40 hidden sm:block">
              Designed and Developed by Lovable
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-background/20 text-background/60 hover:text-background hover:border-background/40 transition-colors"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
