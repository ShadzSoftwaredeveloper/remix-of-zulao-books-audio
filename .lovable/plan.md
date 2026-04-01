

## Plan: Wire KINGSHIP audio files to the player

### What we have
The `src/assets/audio/KINGSHIP/` folder contains 12 MP3 files (Parts 1-12). Currently the `audioSeries` array in `AudioSection.tsx` references 8 tracks with placeholder data and empty `src` values (except track 1 which points to a non-existent `/audio/endless-love.mp3`).

### What we will do

**File: `src/components/AudioSection.tsx`**

1. **Import all 12 KINGSHIP MP3s** using Vite asset imports (same pattern as the existing image imports):
   ```
   import kingshipAudio1 from "@/assets/audio/KINGSHIP/KINGSHIP PART 1.mp3";
   import kingshipAudio2 from "@/assets/audio/KINGSHIP/KINGSHIP PART 2  .mp3";
   ...through Part 12 (note the typo "KINHSHIP" for parts 10-12 and trailing spaces)
   ```

2. **Expand `audioSeries` to all 12 Kingship parts**, assigning:
   - `src` to the imported MP3 module for each part
   - Existing cover images (kingship1-5, kingship10-12) reused; for parts 6-9 we will reuse kingship1 as a placeholder cover
   - `category: "kingship"` for all 12 tracks
   - `album: "Kingship Series"` for all

3. **Add "Kingship" to the category filter dropdown** so users can filter to just this series.

4. **Update the "Recommended Teachings" carousel** to show up to 6 Kingship tracks (no logic change needed since it already uses `slice(0, 6)`).

### Technical notes
- Vite handles MP3 imports as static assets, returning a URL string -- same mechanism as the JPG imports already in use.
- File names have trailing spaces and a typo ("KINHSHIP") which must be matched exactly in the import paths.
- No new dependencies required.

