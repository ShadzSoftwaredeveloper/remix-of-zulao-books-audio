import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <Mail className="mx-auto mb-4 text-secondary" size={36} />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Weekly Newsletter
          </h2>
          <p className="font-body text-primary-foreground/70 mb-8">
            Get inspiring articles, free resources, and updates delivered straight to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>

          <p className="font-body text-xs text-primary-foreground/50 mt-4">
            Your information will never be shared with any third party.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
