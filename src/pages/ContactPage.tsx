import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="page-header">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="font-body text-primary-foreground/80 max-w-lg mx-auto">
            Get in touch and stay connected with our community.
          </p>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
