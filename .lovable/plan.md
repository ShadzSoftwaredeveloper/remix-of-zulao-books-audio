

## Plan: Make Recommended Teachings show category cards

Currently the "Recommended Teachings" section shows the first 6 individual tracks. We'll replace it with 4 category cards that, when clicked, set the category filter and scroll to the track list.

### Changes

**File: `src/components/AudioSection.tsx` (lines 128–152)**

Replace the current recommended section with 4 category cards derived from the `categories` array (excluding "all"). Each card will:
- Show the category name (e.g. "Kingship", "Spiritual Messages", etc.)
- Display the track count for that category
- Use the first track's cover image from that category as the card image
- On click: set `categoryFilter` to that category value and play the first track in that category

The layout stays the same horizontal scroll of cards, but now represents categories instead of individual tracks.

### Technical detail

- Derive category cards by filtering `audioSeries` to get the first track per category (for cover image) and counting tracks per category
- Skip "all" from the categories list
- On click, call `setCategoryFilter(cat.value)` and `playTrack(firstTrackIndex)`

