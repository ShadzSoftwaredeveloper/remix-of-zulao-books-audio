import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://zuulaobusobozibwo.online";
export const SITE_NAME = "Zuula Obusobozibwo";
const DEFAULT_SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/lxYLEV9ndEWS8ItUkrAk7DtNJvr1/social-images/social-1774436608850-Kingdom,_Mentorship.webp";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
};

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
};

const Seo = ({
  title,
  description,
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
  noIndex = false,
  structuredData,
}: SeoProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(pathname, SITE_URL).toString();
    const imageUrl = new URL(image, SITE_URL).toString();
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", title);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "page-structured-data";
    let schema = document.getElementById<HTMLScriptElement>(schemaId);
    if (structuredData) {
      if (!schema) {
        schema = document.createElement("script");
        schema.id = schemaId;
        schema.type = "application/ld+json";
        document.head.appendChild(schema);
      }
      schema.textContent = JSON.stringify(structuredData);
    } else {
      schema?.remove();
    }
  }, [description, image, noIndex, pathname, structuredData, title, type]);

  return null;
};

export default Seo;
