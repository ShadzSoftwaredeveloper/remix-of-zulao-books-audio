import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";

const Body = z.object({ text: z.string().trim().min(1).max(4000) });
const RUN_ID = "X-Lovable-AIG-Run-ID";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  try {
    const parsed = Body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) return json({ error: "Please enter a description (up to 4000 characters)." }, 400);
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "Translation is not configured." }, 500);

    const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      signal: req.signal,
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "fetch" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low", summary: "auto" },
        include: ["reasoning.encrypted_content"],
        instructions:
          "You translate Christian book and audio-teaching descriptions from English into natural, warm, fluent Luganda as spoken in Uganda today. Keep names, book titles and scripture references intact. Return only the Luganda translation, no notes.",
        input: parsed.data.text,
      }),
    });

    const headers = new Headers({ ...corsHeaders, "Content-Type": upstream.headers.get("Content-Type") ?? "text/event-stream" });
    const runId = upstream.headers.get(RUN_ID);
    if (runId) headers.set(RUN_ID, runId);
    if (!upstream.ok) {
      const details = await upstream.text();
      console.error(`Gateway error [${upstream.status}]: ${details}`);
      let message = "Translation failed. Please try again later.";
      if (upstream.status === 429) message = "Too many requests right now. Please wait a moment and try again.";
      if (upstream.status === 402) message = "AI credits have run out for this site.";
      return json({ error: message }, upstream.status);
    }
    return new Response(upstream.body, { status: 200, headers });
  } catch (e) {
    if (req.signal.aborted) return new Response(null, { status: 499, headers: corsHeaders });
    console.error(e);
    return json({ error: "Translation failed." }, 500);
  }
});
