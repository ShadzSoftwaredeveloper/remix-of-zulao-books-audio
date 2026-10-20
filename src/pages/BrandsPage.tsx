import { useState } from "react";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  Music2,
  Youtube,
} from "lucide-react";
import booksImage from "@/assets/images/books zuula brands.jpg";
import shirtImage from "@/assets/images/t-shirt zuula brands.jpg";
import sweaterImage from "@/assets/images/zuula brands-sweater.jpg";
import Seo from "@/components/Seo";

const products = [
  { src: shirtImage, alt: "Zuula branded hoodie" },
  { src: sweaterImage, alt: "Zuula branded sweater" },
  { src: booksImage, alt: "Zuula books collection" },
];

const socialLinks = [
  { label: "Website", href: "/", icon: Globe },
  { label: "TikTok", href: "https://www.tiktok.com/@tumusiimejosephprosper", icon: Music2 },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100094900429500", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@zuulaobusobozibwo", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/zuulaug", icon: Instagram },
  { label: "Email", href: "mailto:info@zuulaobusobozibwo.com", icon: Mail },
];

const BrandsPage = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <main className="brands-page">
      <Seo
        title="Zuula Obusobozibwo | Links"
        description="Connect with Zuula Obusobozibwo and explore books and branded apparel."
      />
      <section className="brands-card" aria-label="Zuula Obusobozibwo links">
        <header className="brands-heading">
          <h1>Zuula Obusobozibwo</h1>
          <p>Unlock Your Gifts, Influence, and Destiny for God’s Kingdom</p>
        </header>

        <nav className="brands-links" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              className="brands-link"
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon aria-hidden="true" size={21} strokeWidth={2.5} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="brands-product">
          <img
            src={products[activeProduct].src}
            alt={products[activeProduct].alt}
          />
        </div>

        <div className="brands-pagination" aria-label="Choose featured image">
          {products.map((product, index) => (
            <button
              key={product.alt}
              type="button"
              className={index === activeProduct ? "is-active" : ""}
              aria-label={`Show ${product.alt}`}
              aria-pressed={index === activeProduct}
              onClick={() => setActiveProduct(index)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BrandsPage;