import {
  BookOpen,
  Globe,
  Headphones,
  Newspaper,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { socials } from "@/data/socials";

const platforms = [
  { label: "Ebooks", href: "/ebooks", description: "Books and resources", icon: BookOpen },
  { label: "Audio", href: "/audio", description: "Listen to teachings", icon: Headphones },
  { label: "Articles", href: "/articles", description: "Read insights and stories", icon: Newspaper },
  { label: "Mentorship", href: "/mentorship", description: "Grow with our community", icon: Users },
];

const BrandsPage = () => {
  return (
    <main className="brands-page">
      <Seo
        title="Our Platforms | Zuula Obusobozibwo"
        description="Explore Zuula Obusobozibwo ebooks, audio teachings, articles, mentorship, and social channels."
      />
      <section className="brands-card" aria-label="Zuula Obusobozibwo platforms">
        <header className="brands-heading">
          <Globe aria-hidden="true" className="brands-mark" size={32} />
          <h1>Our Platforms</h1>
          <p>Explore teachings, resources, and community from Zuula Obusobozibwo.</p>
        </header>

        <nav className="brands-links" aria-label="Social links">
          {platforms.map(({ label, href, description, icon: Icon }) => (
            <Link key={label} className="brands-link" to={href}>
              <Icon aria-hidden="true" size={21} strokeWidth={2.2} />
              <span>
                <strong>{label}</strong>
                <small>{description}</small>
              </span>
            </Link>
          ))}
        </nav>

        <section className="brands-socials" aria-labelledby="brands-socials-title">
          <h2 id="brands-socials-title">Follow along</h2>
          <div className="brands-social-links">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="brands-social-link"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon aria-hidden="true" size={21} />
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default BrandsPage;