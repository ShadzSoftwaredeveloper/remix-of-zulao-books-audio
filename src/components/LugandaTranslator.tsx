import { useRef, useState } from "react";
import { Languages, Copy, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/translate-luganda`;

const LugandaTranslator = ({ kind = "book or audio" }: { kind?: string }) => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const translate = async () => {
    if (!text.trim()) return;
    setLoading(true); setError(""); setResult("");
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      const res = await fetch(URL, {
        method: "POST",
        signal: ctrl.signal,
        headers: {
          "Content-Type": "application/json",
          apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ text }),
      });
      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Translation failed.");
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const data = line.slice(5).trim();
          if (!data || data === "[DONE]") continue;
          try {
            const ev = JSON.parse(data);
            if (ev.type === "response.output_text.delta") setResult((r) => r + ev.delta);
            if (ev.type === "error" || ev.type === "response.failed") throw new Error("Translation failed.");
          } catch (e) {
            if (e instanceof Error && e.message === "Translation failed.") throw e;
          }
        }
      }
    } catch (e) {
      if (!(e instanceof DOMException && e.name === "AbortError")) setError(e instanceof Error ? e.message : "Translation failed.");
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="site-container">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-md sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Languages size={22} /></span>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">Translate to Luganda</h2>
              <p className="font-body text-sm text-muted-foreground">Paste a {kind} description and get a natural Luganda version to review.</p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={4000} placeholder="Paste the English description here..." className="min-h-[180px] font-body" aria-label="English description" />
            <div className="relative min-h-[180px] whitespace-pre-wrap rounded-md border border-border bg-muted/40 p-3 font-body text-sm text-foreground" aria-live="polite">
              {result || <span className="text-muted-foreground">{loading ? "Translating..." : "The Luganda translation will appear here."}</span>}
            </div>
          </div>
          {error && <p className="mt-3 font-body text-sm text-destructive">{error}</p>}
          <div className="mt-4 flex flex-wrap gap-3">
            {loading ? (
              <Button type="button" variant="outline" onClick={() => abortRef.current?.abort()}><Square size={14} /> Stop</Button>
            ) : (
              <Button type="button" onClick={translate} disabled={!text.trim()}>Translate to Luganda</Button>
            )}
            {result && !loading && (
              <Button type="button" variant="outline" onClick={() => navigator.clipboard.writeText(result)}><Copy size={14} /> Copy</Button>
            )}
          </div>
          <p className="mt-3 font-body text-xs text-muted-foreground">AI translation — please review before publishing.</p>
        </div>
      </div>
    </section>
  );
};

export default LugandaTranslator;
