import {
  BookOpen,
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

const PlatformsPage = () => (
  <main className="platforms-page">
    <Seo
      title="Our Platforms | Zuula Obusobozibwo"
      description="Explore Zuula Obusobozibwo ebooks, audio teachings, articles, mentorship, and social channels."
    />
    <section className="platforms-card" aria-label="Zuula Obusobozibwo platforms">
      <header className="platforms-heading">
        <h1>Our Platforms</h1>
        <p>Explore teachings, resources, and community from Zuula Obusobozibwo.</p>
      </header>

      <nav className="platforms-links" aria-label="Zuula platforms">
        {platforms.map(({ label, href, description, icon: Icon }) => (
          <Link key={label} className="platforms-link" to={href}>
            <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
            <span>
              <strong>{label}</strong>
              <small>{description}</small>
            </span>
          </Link>
        ))}
      </nav>

      <section className="platforms-socials" aria-labelledby="platforms-socials-title">
        <h2 id="platforms-socials-title">Follow along</h2>
        <div className="platforms-social-links">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              className="platforms-social-link"
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

export default PlatformsPage;