export type DescLang = "en" | "lg";

const LugandaToggle = ({ value, onChange }: { value: DescLang; onChange: (v: DescLang) => void }) => (
  <div role="group" aria-label="Description language" className="inline-flex rounded-full border border-border bg-muted/50 p-1 font-body text-xs font-semibold">
    {(["en", "lg"] as const).map((l) => (
      <button
        key={l}
        type="button"
        aria-pressed={value === l}
        onClick={() => onChange(l)}
        className={`rounded-full px-4 py-1.5 transition-colors ${value === l ? "bg-primary text-primary-foreground shadow" : "text-foreground/70 hover:text-primary"}`}
      >
        {l === "en" ? "English" : "Luganda"}
      </button>
    ))}
  </div>
);

export default LugandaToggle;
