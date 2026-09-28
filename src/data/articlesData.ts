import blogSunsetAsset from "@/assets/blog/blog-3.jpg.asset.json";
import blogReflectionAsset from "@/assets/blog/blog-4.jpg.asset.json";
import blogMentorshipAsset from "@/assets/blog/bkog-4.jpeg.asset.json";
import blogLeadershipAsset from "@/assets/blog/blo-2.jpeg.asset.json";
import blogStewardshipAsset from "@/assets/blog/blog-1.jpeg.asset.json";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "kingdom-stewardship-and-financial-integrity",
    title: "Kingdom Stewardship & Financial Integrity",
    excerpt:
      "Stewardship is a Kingdom mandate. Resources, talents, and finances managed with integrity expand influence and honor God.",
    tag: "Kingdom",
    image: blogStewardshipAsset.url,
    date: "January 28, 2026",
    author: "Tumusiime Joseph Prosper",
    content: [
      "Stewardship begins with a simple confession: nothing we hold is ultimately ours. Time, talent, relationships and money are entrusted to us for a season, and the measure of our lives is not what we accumulate but what we faithfully administer.",
      "Financial integrity is the most visible test of that trust. How we earn, how we record, how we give and how we repay speak louder than any platform we occupy. A leader who is careless with small sums will be careless with large assignments.",
      "Practically, integrity looks like keeping honest books, honoring commitments on time, refusing income that compromises conscience, and building margin so that generosity is planned rather than accidental.",
      "When resources are managed this way, influence expands naturally. God does not entrust Kingdom weight to hands that leak. Faithfulness in the little becomes the doorway to the much.",
    ],
  },
  {
    slug: "raising-the-next-generation-of-kingdom-leaders",
    title: "Raising the Next Generation of Kingdom Leaders",
    excerpt:
      "Kingdom legacy is built when mature leaders intentionally mentor the next generation to carry God's purposes forward.",
    tag: "Mentorship",
    image: blogLeadershipAsset.url,
    date: "January 28, 2026",
    author: "Tumusiime Joseph Prosper",
    content: [
      "Every generation inherits either a blueprint or a burden. Mentorship decides which one we hand over.",
      "Raising leaders is not primarily about teaching skills; it is about transferring character, conviction and courage. Skills can be learned anywhere, but conviction is caught in proximity.",
      "Give young leaders real assignments, real feedback and real room to fail safely. Protect them from cynicism by letting them see how you handle pressure, correction and delay.",
      "The measure of your leadership is not the crowd you gather, but the leaders who outgrow you and still call you father or mother in the faith.",
    ],
  },
  {
    slug: "the-power-of-vision-and-purpose-in-the-kingdom",
    title: "The Power of Vision & Purpose in the Kingdom",
    excerpt:
      "Vision is prophetic fuel, and purpose is the power behind it. Together, they propel believers into divine impact.",
    tag: "Vision",
    image: blogSunsetAsset.url,
    date: "August 12, 2025",
    author: "Tumusiime Joseph Prosper",
    content: [
      "Vision answers the question 'where', purpose answers the question 'why'. A person with vision but no purpose burns out; a person with purpose but no vision drifts.",
      "Clarity rarely arrives as a full map. It comes as the next honest step. Write what you see, review it often, and let it shape your calendar and your spending.",
      "Purpose is sustained in seasons where nothing visible is happening. That is where character is formed and capacity is stretched for what is coming.",
      "Hold the vision loosely enough for God to edit it, and firmly enough that discouragement cannot delete it.",
    ],
  },
  {
    slug: "building-a-family-prayer-altar",
    title: "Building a Family Prayer Altar",
    excerpt:
      "A praying family is a protected family. Learn how to establish a consistent altar that shapes generations.",
    tag: "Family",
    image: blogMentorshipAsset.url,
    date: "February 10, 2026",
    author: "Tumusiime Joseph Prosper",
    content: [
      "An altar is simply a place of consistent meeting with God. When a family builds one, prayer stops being an emergency response and becomes a rhythm of life.",
      "Start small and stay consistent: a fixed time, an open Bible, a short song, and honest prayer. Fifteen faithful minutes will outlast an hour attempted once a month.",
      "Let every member participate. Children who are given words to pray grow into adults who know how to stand. Sharing needs out loud also teaches the family to celebrate answers together.",
      "Over time the altar becomes a boundary line. What is settled in the place of prayer rarely gets negotiated in the pressures of the day.",
    ],
  },
  {
    slug: "discipline-the-quiet-engine-of-destiny",
    title: "Discipline: The Quiet Engine of Destiny",
    excerpt:
      "Talent opens doors, but discipline keeps you in the room. Small daily choices decide the size of your future.",
    tag: "Growth",
    image: blogReflectionAsset.url,
    date: "February 24, 2026",
    author: "Tumusiime Joseph Prosper",
    content: [
      "Most people do not fail because they lack vision. They fail because they lack the daily structures that carry vision to completion.",
      "Discipline is not punishment; it is self-leadership. It is choosing in advance what you will do when you no longer feel like doing it.",
      "Guard three things: your mornings, your inputs and your commitments. What you feed your mind and how you keep your word will quietly shape everything else.",
      "Destiny is rarely decided in one dramatic moment. It is assembled from thousands of ordinary, unseen obediences.",
    ],
  },
  {
    slug: "divine-relocation-when-god-moves-you",
    title: "Divine Relocation: When God Moves You",
    excerpt:
      "Sometimes the delay is not denial but direction. Understanding seasons of relocation in God's plan.",
    tag: "Purpose",
    image: blogSunsetAsset.url,
    date: "March 6, 2026",
    author: "Tumusiime Joseph Prosper",
    content: [
      "There are assignments that cannot be fulfilled where you currently stand. Relocation, whether geographic, relational or mental, is often the first step of a new chapter.",
      "God's moves are rarely comfortable. They usually cost familiarity, and they always test whether our security is in the place or in the One who sent us.",
      "Discern before you depart. Confirm the leading through scripture, counsel and peace, then move decisively rather than half-heartedly.",
      "When the move is God's, provision follows obedience. What looked like loss becomes the doorway into enlargement.",
    ],
  },
];

export const getArticleBySlug = (slug?: string) =>
  articles.find((a) => a.slug === slug);