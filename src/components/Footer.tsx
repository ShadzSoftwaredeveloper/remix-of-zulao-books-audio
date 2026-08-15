import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, MapPin, Phone, Mail, Facebook, Twitter, Youtube, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/zuula-logo.png";
import { toast } from "@/hooks/use-toast";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "eBooks", href: "/ebooks" },
  { label: "Audio Teachings", href: "/audio" },
  { label: "Articles", href: "/articles" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Books & eBooks", href: "/ebooks" },
  { label: "Audio Teachings", href: "/audio" },
  { label: "Discipleship", href: "/about" },
  { label: "Speaking & Seminars", href: "/contact" },
  { label: "Mentorship", href: "/contact" },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="site-container py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="lg:flex-1">
            <h3 className="font-display text-2xl font-bold text-background mb-1">
              Subscribe to Our Newsletter
            </h3>
            <p className="font-body text-sm text-background/60">
              Inspiring articles, free resources and updates — straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
              toast({
                title: "You're subscribed!",
                description: "Thank you for joining our newsletter.",
              });
            }}
            className="flex flex-col sm:flex-row gap-3 lg:w-[460px]"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="site-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={logo} alt="Zuula Obusobozibwo" className="h-12 w-auto mb-6" />
            <p className="font-body text-sm text-background/60 leading-relaxed mb-6">
              Zuula Obusobozibwo empowers you to impact generations — unlocking your gifts,
              influence and destiny for God's Kingdom through transformative books and audio
              teachings.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="group flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    <ArrowRight size={14} className="text-secondary transition-transform group-hover:translate-x-1" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="group flex items-center gap-3 font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    <ArrowRight size={14} className="text-secondary transition-transform group-hover:translate-x-1" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="font-body text-sm text-background/60">Kampala, Uganda</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary shrink-0 mt-0.5" />
                <a href="tel:+25677766708" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  077766708
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary shrink-0 mt-0.5" />
                <a href="mailto:info@zulaobusobozibwo.com" className="font-body text-sm text-background/60 hover:text-background transition-colors break-all">
                  info@zulaobusobozibwo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="site-container py-5 flex items-center justify-between">
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
