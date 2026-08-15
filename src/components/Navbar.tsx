import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/zuula-logo.png";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "About", href: "/about" },
{ label: "eBooks", href: "/ebooks" },
{ label: "Audio", href: "/audio" },
{ label: "Articles", href: "/articles" },
{ label: "Contact", href: "/contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top contact bar */}
      <div className="hidden md:block bg-accent text-accent-foreground">
        <div className="container mx-auto flex items-center justify-between h-9 px-4 md:px-[70px]">
          <div className="flex items-center gap-6 font-body text-xs">
            <a href="tel:+25677766708" className="inline-flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={13} /> 077766708
            </a>
            <a href="mailto:info@zuulaobusobozibwo.com" className="inline-flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={13} /> info@zuulaobusobozibwo.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="hover:text-secondary transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-[70px]">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Zuula Obusobozibwo" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
          <li key={l.href}>
              <Link
              to={l.href}
              className={`font-body text-sm font-medium transition-colors ${
              location.pathname === l.href ?
              "text-primary font-semibold" :
              "text-foreground/80 hover:text-primary"}`
              }>
              
                {l.label}
              </Link>
            </li>
          )}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity">
          
          Get Involved
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) =>
          <li key={l.href}>
                <Link
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm font-medium py-2 ${
              location.pathname === l.href ? "text-primary" : "text-foreground/80"}`
              }>
              
                  {l.label}
                </Link>
              </li>
          )}
            <li>
              <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center px-5 py-2 rounded-full bg-secondary text-secondary-foreground font-body text-sm font-semibold">
              
                Get Involved
              </Link>
            </li>
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;