import logo from "@/assets/zuula-logo.png";

interface LogoLockupProps {
  /** "light" for cream/white surfaces, "dark" for the purple footer. */
  tone?: "light" | "dark";
  /** Tailwind classes for the emblem image. */
  imgClassName?: string;
  /** Tailwind classes controlling display of the wordmark. */
  textClassName?: string;
}

const LogoLockup = ({
  tone = "light",
  imgClassName = "h-11 w-auto lg:h-12",
  textClassName = "hidden lg:flex",
}: LogoLockupProps) => {
  const title = tone === "dark" ? "text-primary-foreground" : "text-foreground";
  const sub = tone === "dark" ? "text-background/60" : "text-muted-foreground";

  return (
    <span className="flex items-center gap-3">
      <img src={logo} alt="Zuula Obusobozibwo" className={imgClassName} />
      <span className={`flex-col leading-none ${textClassName}`}>
        <span className={`font-body text-lg font-extrabold tracking-tight ${title}`}>ZUULA</span>
        <span className={`mt-1 font-body text-[10px] font-medium tracking-[0.3em] ${sub}`}>OBUSOBOZIBWO</span>
      </span>
    </span>);

};

export default LogoLockup;
