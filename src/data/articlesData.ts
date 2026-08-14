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
    image:
      "https://zulaobusobozibwo.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-28-at-2.00.24-PM.jpeg",
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
    image:
      "https://zulaobusobozibwo.com/wp-content/uploads/2025/08/WhatsApp-Image-2026-01-28-at-1.59.28-PM.jpeg",
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
    image:
      "https://zulaobusobozibwo.com/wp-content/uploads/2025/08/pexels-pixabay-247195-scaled.jpg",
    date: "August 12, 2025",
    author: "Tumusiime Joseph Prosper",
    content: [
      "Vision answers the question 'where', purpose answers the question 'why'. A person with vision but no purpose burns out; a person with purpose but no vision drifts.",
      "Clarity rarely arrives as a full map. It comes as the next honest step. Write what you see, review it often, and let it shape your calendar and your spending.",
      "Purpose is sustained in seasons where nothing visible is happening. That is where character is formed and capacity is stretched for what is coming.",
      "Hold the vision loosely enough for God to edit it, and firmly enough that discouragement cannot delete it.",
    ],
  },
];

export const getArticleBySlug = (slug?: string) =>
  articles.find((a) => a.slug === slug);