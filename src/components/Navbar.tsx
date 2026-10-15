import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, ShoppingCart, X } from "lucide-react";
import logo from "@/assets/zuula-logo.png";
import { Button } from "@/components/ui/button";
import CartSheet from "@/components/CartSheet";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useCart } from "@/contexts/CartContext";
import { articles } from "@/data/articlesData";

const categoryNotes: Record<string, string> = {
  Kingdom: "Stewardship & Kingdom living",
  Mentorship: "Growing under godly guidance",
  Vision: "Clarity, vision & direction",
  Family: "Faith that lasts generations",
  Growth: "Personal & spiritual growth",
  Purpose: "Discovering why you exist",
};

const navLinks = [
{ label: "Mentorship", href: "/mentorship" },
{ label: "Events", href: "/contact" },
{ label: "Library", href: "/ebooks" },
{ label: "Audio", href: "/audio" },
{ label: "Articles", href: "/articles" },
{ label: "About", href: "/about" },
{ label: "Contact", href: "/contact" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();
  const { itemCount, openCart } = useCart();

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

      <div className="site-container flex h-[84px] items-center gap-5">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Zuula Obusobozibwo" className="h-11 w-auto lg:h-12" />
        </Link>

        <ul className="ml-auto hidden items-center gap-3 lg:flex xl:gap-5">

          {navLinks.map((l) =>
          <li key={l.label} className={l.label === "Articles" ? "group relative" : undefined}>
              <Link
              to={l.href}
              className={`font-body text-sm font-medium transition-colors ${
              location.pathname === l.href ?
              "text-primary font-semibold" :
              "text-foreground/80 hover:text-primary"}`
              }>
              
                {l.label}
              </Link>
              {l.label === "Articles" && (
                <div className="invisible absolute right-0 top-full z-50 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid w-[min(760px,90vw)] grid-cols-2 overflow-hidden rounded-2xl bg-primary shadow-2xl shadow-primary/30">
                    <div className="p-6">
                      <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">Categories</p>
                      <Link to="/articles" className="block rounded-lg px-3 py-2 hover:bg-primary-foreground/10">
                        <span className="block font-display text-base font-semibold text-primary-foreground">All Posts</span>
                        <span className="block font-body text-xs text-primary-foreground/70">Browse every teaching & story</span>
                      </Link>
                      {articles.map((a) => (
                        <Link key={a.slug} to={`/articles/${a.slug}`} className="block rounded-lg px-3 py-2 hover:bg-primary-foreground/10">
                          <span className="block font-display text-base font-semibold text-primary-foreground">{a.tag}</span>
                          <span className="block font-body text-xs text-primary-foreground/70">{categoryNotes[a.tag] ?? a.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-primary-foreground/5 p-6">
                      <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">Featured</p>
                      <div className="space-y-4">
                        {articles.slice(0, 2).map((a) => (
                          <Link key={a.slug} to={`/articles/${a.slug}`} className="group/card relative block h-32 overflow-hidden rounded-xl">
                            <img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                            <span className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                            <span className="absolute inset-x-3 bottom-3 text-center font-display text-sm font-semibold text-background">{a.title}</span>
                          </Link>
                        ))}
                      </div>
                      <Link to="/articles" className="mt-5 flex items-center justify-center gap-2 font-body text-sm font-semibold text-secondary hover:opacity-80">
                        View All Posts <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex xl:ml-4">
          <LanguageSwitcher />
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
            <Link to="/contact">Book Joseph</Link>
          </Button>
          <a href="https://t.me/ZuulaMentorship" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center rounded-full bg-primary px-5 font-body text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">Join Mentorship</a>
          <Button type="button" variant="outline" size="icon" onClick={openCart} className="relative rounded-full bg-muted/50" title="Open cart" aria-label={`Open cart with ${itemCount} items`}>
            <ShoppingCart size={19} />
            {itemCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 font-body text-[10px] font-bold text-primary-foreground">{itemCount}</span>}
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
          <LanguageSwitcher className="h-9 px-2 text-xs" />
          <Button type="button" variant="ghost" size="icon" onClick={openCart} className="relative" aria-label={`Open cart with ${itemCount} items`}>
            <ShoppingCart size={22} />
            {itemCount > 0 && <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 font-body text-[10px] font-bold text-primary-foreground">{itemCount}</span>}
          </Button>
          <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {open &&
      <div className="border-t border-border bg-background px-4 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navLinks.map((l) =>
          <li key={l.label}>
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
              <Button asChild variant="outline" className="mt-2 w-full border-primary text-primary hover:bg-primary/10 hover:text-primary">
                <Link to="/contact" onClick={() => setOpen(false)}>Book Joseph</Link>
              </Button>
            </li>
            <li>
              <a href="https://t.me/ZuulaMentorship" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center rounded-full bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground">Join Mentorship</a>
            </li>
          </ul>
        </div>
      }
      <CartSheet />
    </nav>);

};

export default Navbar;