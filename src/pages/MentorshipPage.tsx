import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, MessageCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Currency = "UGX" | "USD";

type MembershipPlan = {
  name: string;
  price: Record<Currency, string>;
  benefits: readonly string[];
  action: string;
  href: string;
  icon: typeof Send;
  featured?: boolean;
};

const plans: readonly MembershipPlan[] = [
  {
    name: "Free Community",
    price: { UGX: "Free", USD: "Free" },
    benefits: [
      "Community mentorship group",
      "Weekly encouragement",
      "Free article library",
      "Event announcements",
    ],
    action: "Join the community",
    href: "https://t.me/ZuulaMentorship",
    icon: Send,
  },
  {
    name: "Inner Circle",
    price: { UGX: "UGX 100K", USD: "USD 28" },
    benefits: [
      "Private Telegram community group",
      "Monthly group coaching",
      "Members-only events",
      "Live Q&A with Joseph",
    ],
    action: "Join on Telegram",
    href: "https://t.me/ZuulaMentorship",
    icon: Send,
    featured: true,
  },
  {
    name: "One-on-One Mentorship & Guidance",
    price: { UGX: "UGX 200K", USD: "USD 55" },
    benefits: [
      "Two-hour one-on-one session with Joseph",
      "1 month of Inner Circle included",
      "Tailored guidance plan",
      "Direct accountability",
    ],
    action: "Start mentorship",
    href: "https://wa.me/25677766708?text=Hello%20Joseph%2C%20I%20would%20like%20to%20start%20one-on-one%20mentorship.",
    icon: MessageCircle,
  },
] as const;

const MentorshipPage = () => {
  const [currency, setCurrency] = useState<Currency>("UGX");

  useEffect(() => {
    document.title = "Mentorship Membership | Zuula Obusobozibwo";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-24 pt-48 sm:pt-52">
        <section className="site-container">
          <motion.header
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mx-auto mb-5 w-fit rounded-full border border-border bg-card px-5 py-2 font-body text-xs font-semibold uppercase text-primary">
              Community
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Join the membership
            </h1>

            <div className="mt-10 inline-flex rounded-full border border-border bg-card p-1" role="group" aria-label="Choose currency">
              {(["USD", "UGX"] as Currency[]).map((option) => (
                <Button
                  key={option}
                  type="button"
                  variant={currency === option ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrency(option)}
                  aria-pressed={currency === option}
                  className="min-w-20 rounded-full"
                >
                  {option}
                </Button>
              ))}
            </div>
            <p className="mt-3 font-body text-sm text-muted-foreground">
              Exact price · pay by Mobile Money
            </p>
          </motion.header>

          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08 }}
                  className={cn(
                    "relative flex min-h-[430px] flex-col rounded-lg border bg-card p-7 sm:p-9",
                    plan.featured
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                      : "border-border",
                  )}
                >
                  {plan.featured && (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary px-5 py-1.5 font-body text-xs font-bold uppercase text-primary-foreground">
                      Most popular
                    </span>
                  )}

                  <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {plan.name}
                  </h2>
                  <div className="mt-4 flex flex-wrap items-end gap-1">
                    <p className="font-body text-4xl font-bold text-foreground sm:text-5xl">
                      {plan.price[currency]}
                    </p>
                    {plan.price[currency] !== "Free" && (
                      <span className="pb-1 font-body text-sm text-muted-foreground">/month</span>
                    )}
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 font-body text-sm leading-6 text-muted-foreground sm:text-base">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    size="lg"
                    className="mt-auto w-full rounded-full"
                  >
                    <a href={plan.href} target="_blank" rel="noopener noreferrer">
                      <Icon size={17} />
                      {plan.action}
                    </a>
                  </Button>
                </motion.article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentorshipPage;