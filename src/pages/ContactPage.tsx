import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "077766708",
    href: "tel:+25677766708",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@zuulaobusobozibwo.com",
    href: "mailto:info@zuulaobusobozibwo.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kampala, Uganda",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 8 AM – 6 PM",
    href: "#",
  },
];

const faqs = [
  {
    question: "How can I book Joseph for an event?",
    answer:
      "Send your event date, location, audience, and preferred topic through the contact form. Our team will respond with availability and next steps.",
  },
  {
    question: "How do I join the mentorship community?",
    answer:
      "Choose a mentorship plan on the Mentorship page. You can join the free community on Telegram or contact us for the Inner Circle and one-on-one guidance.",
  },
  {
    question: "How can I order a book?",
    answer:
      "Open the Library, add your chosen books to the cart, then complete your order through WhatsApp. We will confirm payment and delivery details with you.",
  },
  {
    question: "Where can I listen to the audio teachings?",
    answer:
      "Visit the Audio page to browse and play teachings on spiritual growth, personal development, leadership, and business.",
  },
  {
    question: "How soon will I receive a response?",
    answer:
      "We normally respond during our working hours, Monday to Saturday from 8 AM to 6 PM.",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="page-header">
        <div className="relative z-10 site-container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            We'd love to hear from you. Reach out with questions, prayer requests, or partnership inquiries.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
       <section className="py-12 sm:py-16 bg-muted/50 overflow-hidden">
        <div className="site-container">
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                 className="group flex min-w-0 flex-col items-center rounded-xl border border-border bg-background p-5 text-center transition-all duration-300 hover:border-secondary/40 hover:shadow-lg sm:p-6"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  <item.icon size={20} />
                </span>
                <p className="font-display text-sm font-semibold text-foreground mb-1">
                  {item.label}
                </p>
                 <p className="max-w-full break-words font-body text-xs leading-relaxed text-muted-foreground">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
       <section className="py-16 sm:py-20 bg-background overflow-hidden">
        <div className="site-container">
           <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
                Send a Message
              </p>
               <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/30 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-muted/30 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/30 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/30 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98] disabled:opacity-60"
                >
                  <Send size={16} />
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary mb-3">
                Our Location
              </p>
               <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127635.14663107!2d32.5275!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc0f90d17b11%3A0x53bf4b tried56d67e0b!2sKampala%2C+Uganda!5e0!3m2!1sen!2s!4v1700000000000"
                  className="w-full h-72 sm:h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="font-body text-xs text-muted-foreground mt-3">
                Kampala, Uganda · Serving communities across East Africa
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
       <section className="bg-muted/50 py-16 sm:py-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-center"
            >
              <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-secondary">
                Helpful Answers
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:text-primary hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pr-8 font-body text-sm leading-7 text-muted-foreground sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="site-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Join Our Community
            </h2>
            <p className="font-body text-primary-foreground/80 max-w-md mx-auto mb-8">
              Stay connected through prayer, teaching, and Kingdom-building resources.
            </p>
            <a
              href="/audio"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-body text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              Explore Our Teachings
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
