import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Instagram, Menu, Search, X } from "lucide-react";
import logo from "@/assets/zuula-logo.png";
import { Button } from "@/components/ui/button";

const navLinks = [
{ label: "Home", href: "/" },
{ label: "Mentorship", href: "https://t.me/ZuulaMentorship", external: true },
{ label: "Events", href: "/contact" },
{ label: "Library", href: "/ebooks" },
{ label: "Articles", href: "/articles" },
{ label: "About", href: "/about" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      {showAnnouncement && <div className="bg-primary text-primary-foreground">
        <div className="site-container relative flex min-h-11 items-center justify-center gap-4 py-2 pr-12 font-body text-xs sm:text-sm">
          <span className="hidden h-2 w-2 rounded-full bg-secondary sm:block" />
          <p className="text-center font-semibold">Kingdom Business Summit 2026 · Sat 24 Oct · Fidodido</p>
          <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2 font-semibold transition-colors hover:bg-primary-foreground/25 sm:inline-flex">
            Get tickets <ArrowRight size={15} />
          </Link>
          <Button type="button" variant="ghost" size="icon" onClick={() => setShowAnnouncement(false)} aria-label="Dismiss announcement" className="absolute right-3 h-8 w-8 rounded-full text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground">
            <X size={17} />
          </Button>
        </div>
      </div>}

      <div className="site-container flex h-[84px] items-center justify-between gap-5">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Zuula Obusobozibwo" className="h-11 w-auto lg:h-12" />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((l) =>
          <li key={l.href}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-medium text-foreground/75 transition-colors hover:text-primary">
                {l.label}
              </a>
            ) : (
              <Link
              to={l.href}
              className={`font-body text-sm font-medium transition-colors ${
              location.pathname === l.href ?
              "text-primary font-semibold" :
              "text-foreground/80 hover:text-primary"}`
              }>
              
                {l.label}
              </Link>
            )}
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact" className="whitespace-nowrap font-body text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">Book Joseph</Link>
          <a href="https://t.me/ZuulaMentorship" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full bg-primary px-5 font-body text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">Join Mentorship</a>
          <Button asChild variant="outline" size="icon" className="rounded-full bg-muted/50" title="Search articles">
            <Link to="/articles" aria-label="Search articles"><Search size={19} /></Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full bg-muted/50" title="Instagram">
            <a href="#" aria-label="Instagram"><Instagram size={19} /></a>
          </Button>
        </div>

        <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="lg:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {open &&
      <div className="border-t border-border bg-background px-4 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) =>
          <li key={l.href}>
              {l.external ? (
                <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block py-2.5 font-body text-sm font-medium text-foreground/80">{l.label}</a>
              ) : (
                <Link
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm font-medium py-2 ${
              location.pathname === l.href ? "text-primary" : "text-foreground/80"}`
              }>
              
                  {l.label}
                </Link>
              )}
              </li>
          )}
            <li>
              <a href="https://t.me/ZuulaMentorship" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground">Join Mentorship</a>
            </li>
          </ul>
        </div>
      }
    </nav>);

};

export default Navbar;