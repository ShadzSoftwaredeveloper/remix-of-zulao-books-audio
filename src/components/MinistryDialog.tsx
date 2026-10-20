import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ministryIntro, ministrySections } from "@/data/ministryData";

interface MinistryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MinistryDialog = ({ open, onOpenChange }: MinistryDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto p-0 rounded-xl border-border bg-background sm:max-w-2xl">
        <div>
          <DialogHeader className="border-b border-border/60 bg-cream px-5 py-5 sm:px-8 sm:py-6">
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold">
              Zuula Obusobozibwo
            </p>
            <DialogTitle className="font-display text-2xl font-bold text-foreground leading-tight sm:text-3xl">
              About the Ministry
            </DialogTitle>
            <DialogDescription className="font-body text-sm text-muted-foreground">
              Kingdom Mentorship &amp; Personal Development — a divine mandate
              to awaken destinies.
            </DialogDescription>
          </DialogHeader>

          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
              {ministryIntro}
            </p>

            <div className="mt-8 space-y-8">
              {ministrySections.map((section) => (
                <section key={section.heading}>
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground sm:text-xl">
                    <Sparkles size={16} className="shrink-0 text-secondary" />
                    {section.heading}
                  </h3>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-body text-sm text-foreground/70 leading-relaxed sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.scripture && (
                    <blockquote className="mt-4 border-l-4 border-secondary bg-cream/70 py-3 pl-4 pr-3 italic font-display text-base text-foreground/80">
                      "{section.scripture.text}"
                      <cite className="mt-1 block font-body text-xs not-italic tracking-wide text-secondary">
                        — {section.scripture.reference}
                      </cite>
                    </blockquote>
                  )}
                </section>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border/60 bg-cream/60 px-5 py-4 sm:flex-row sm:justify-end sm:px-8">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
            >
              <Link to="/mentorship" onClick={() => onOpenChange(false)}>
                Explore Mentorship
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-secondary text-secondary-foreground hover:opacity-90"
            >
              <Link to="/contact" onClick={() => onOpenChange(false)}>
                <BookOpen size={16} />
                Talk to Joseph
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MinistryDialog;
