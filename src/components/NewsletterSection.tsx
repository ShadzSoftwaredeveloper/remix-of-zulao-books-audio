import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Star, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const inviteLink = "https://t.me/ZuulaMentorship";

const TelegramSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      toast({
        title: "Link copied",
        description: "Invite link copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleWhatsAppShare = () => {
    const text = `Join our mentorship community on Telegram: ${inviteLink}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleEmailShare = () => {
    const subject = "Join our Telegram Mentorship Community";
    const body = `Hi there,\n\nI thought you might be interested in joining our mentorship community on Telegram:\n\n${inviteLink}\n\nWalk alongside a tribe of purpose-driven believers.`;
    window.location.href = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const benefits = [
    "Daily devotionals & purpose prompts",
    "Live monthly Q&A with Joseph",
    "First access to events & masterclasses",
    "A supportive tribe keeping you accountable",
  ];

  return (
    <section id="contact" className="py-16 md:py-28 bg-cream overflow-hidden">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl md:rounded-3xl bg-muted/60 border border-border overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 p-5 sm:p-8 md:p-12 lg:p-16 items-center">
            {/* Left content */}
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Send className="text-primary" size={22} />
              </div>
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-3">
                Mentorship Community
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
                Join our Telegram
              </h2>
              {/* <p className="font-body text-muted-foreground leading-relaxed mb-8 max-w-md">
                Walk the journey alongside a tribe of purpose-driven believers.
                Our private Telegram channel is where the mentorship comes
                alive between sessions.
              </p> */}

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star
                      className="text-secondary shrink-0 mt-0.5"
                      size={18}
                      fill="currentColor"
                    />
                    <span className="font-body text-foreground/90">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={inviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-4 text-center rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 sm:w-auto sm:px-8"
              >
                <Send size={18} />
                Join the channel — @ZuulaMentorship
              </a>
            </div>

            {/* Right invite card */}
            <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 border border-border shadow-sm">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                Invite someone in
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-6">
                Know someone who needs this? Share the invite and bring them
                along.
              </p>

              <div className="flex flex-col gap-2 rounded-xl bg-muted p-2 border border-border mb-4 sm:flex-row sm:items-center sm:rounded-full">
                <input
                  type="text"
                  readOnly
                  value={inviteLink}
                  className="flex-1 bg-transparent px-4 py-2 font-body text-sm text-foreground outline-none min-w-0"
                />
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy invite link"}
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-secondary/10 text-secondary font-body font-semibold text-sm hover:bg-secondary/20 transition-colors"
                >
                  <MessageCircle size={18} />
                  Share on WhatsApp
                </button>
                <button
                  onClick={handleEmailShare}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-muted text-foreground font-body font-semibold text-sm hover:bg-muted/80 transition-colors"
                >
                  <Mail size={18} />
                  Share by email
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TelegramSection;
