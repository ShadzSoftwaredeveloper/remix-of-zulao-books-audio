import { Link } from "react-router-dom";
import logo from "@/assets/zuula-logo.png";
import { Youtube, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "eBooks", href: "/ebooks" },
  { label: "Audio", href: "/audio" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Zuula Obusobozibwo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="font-body text-sm text-background/60">
              Empowering You To Impact Generations. Unlock your gifts, influence, and destiny for God's Kingdom.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="font-body text-sm text-background/60 hover:text-secondary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/channel/UCN05jJFEdH6DY9D9D0tKZRA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 text-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://zulaobusobozibwo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 text-background hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="font-body text-xs text-background/40 mt-6">
              © {new Date().getFullYear()} Zuula Obusobozibwo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
