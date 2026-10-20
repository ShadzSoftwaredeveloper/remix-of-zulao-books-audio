import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  Icon: LucideIcon;
  href: string;
  label: string;
}

/** Canonical social profiles — used by the footer and the ministry popup. */
export const socials: SocialLink[] = [
  {
    Icon: Instagram,
    href: "https://www.instagram.com/zuulaug",
    label: "Instagram",
  },
  {
    Icon: Music2,
    href: "https://www.tiktok.com/@tumusiimejosephprosper",
    label: "TikTok",
  },
  {
    Icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100094900429500",
    label: "Facebook",
  },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@zuulaobusobozibwo",
    label: "YouTube",
  },
];
