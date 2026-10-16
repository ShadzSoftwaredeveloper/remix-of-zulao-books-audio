import blogSunset from "@/assets/blog/blog-3.jpg";
import blogReflection from "@/assets/blog/blog-4.jpg";
import blogMentorship from "@/assets/blog/bkog-4.jpeg";
import blogLeadership from "@/assets/blog/blo-2.jpeg";
import blogStewardship from "@/assets/blog/blog-1.jpeg";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  image: string;
  date: string;
  author: string;
  content: string[];
  sections: { heading: string; paragraphs: string[] }[];
  relatedSlugs: string[];
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
    sections: [
      {
        heading: "Stewardship Begins with the Heart",
        paragraphs: [
          "Before stewardship becomes a budget, it is an attitude. A steward lives with gratitude rather than entitlement and asks how every resource can serve God's purposes. This perspective removes both pride in seasons of abundance and shame in seasons of limitation.",
          "The heart is revealed in ordinary decisions: whether we tell the truth when no one can verify it, whether we return what we borrowed, and whether generosity remains part of our lives when finances feel tight. These quiet choices prepare us for greater trust.",
        ],
      },
      {
        heading: "Build Practices That Protect Integrity",
        paragraphs: [
          "Good intentions need practical systems. Record income and expenses, separate personal and ministry funds, invite appropriate accountability, and review commitments before taking on new ones. Clear records protect relationships as much as they protect money.",
          "Set aside giving first, meet obligations faithfully, save with wisdom, and resist the pressure to display a lifestyle that your present season cannot sustain. Financial peace grows when private choices agree with public values.",
        ],
      },
    ],
    relatedSlugs: ["discipline-the-quiet-engine-of-destiny", "the-power-of-vision-and-purpose-in-the-kingdom"],
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
    sections: [
      {
        heading: "Model Before You Instruct",
        paragraphs: [
          "Emerging leaders listen to our teaching, but they study our lives. They notice how we speak about absent people, respond to disappointment, honor authority, and treat those who cannot advance us. What is demonstrated consistently becomes permission for the next generation.",
          "This is why mentorship requires access rather than occasional speeches. Invite younger leaders into preparation, service, decision-making, and reflection. Explain not only what you chose, but the values and prayers that shaped the choice.",
        ],
      },
      {
        heading: "Create a Path from Potential to Responsibility",
        paragraphs: [
          "Affirming potential is only the beginning. Give clear assignments with real outcomes, agree on what faithfulness looks like, and schedule honest feedback. Responsibility should grow as character, competence, and consistency become visible.",
          "Do not rescue a developing leader from every consequence. Walk with them as they learn, helping them name what went wrong and what they will do differently. Safe correction produces durable confidence and humble leadership.",
        ],
      },
    ],
    relatedSlugs: ["building-a-family-prayer-altar", "discipline-the-quiet-engine-of-destiny"],
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
    sections: [
      {
        heading: "Turn Vision into a Faithful Plan",
        paragraphs: [
          "A vision becomes useful when it begins to shape priorities. Write it in language clear enough to guide a decision, then identify the people you are called to serve, the change you hope to see, and the next measurable act of obedience.",
          "Place that next step on the calendar. Assign resources to it and decide what must be declined so attention remains focused. Planning does not replace faith; it gives faith a practical expression.",
        ],
      },
      {
        heading: "Remain Teachable While You Build",
        paragraphs: [
          "Purpose provides stability, but methods must remain open to refinement. Seek counsel from people who understand both your calling and your blind spots. Their questions may sharpen what enthusiasm alone cannot see.",
          "Review the fruit without worshipping the numbers. Growth, delays, and closed doors can all provide direction. A mature visionary knows the difference between abandoning an assignment and allowing God to improve the route.",
        ],
      },
    ],
    relatedSlugs: ["divine-relocation-when-god-moves-you", "kingdom-stewardship-and-financial-integrity"],
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
    sections: [
      {
        heading: "Choose a Rhythm Your Family Can Keep",
        paragraphs: [
          "Consistency matters more than complexity. Choose a time when most family members can be present and begin with a simple pattern: gratitude, scripture, conversation, and prayer. A sustainable rhythm gives everyone room to grow.",
          "Expect interruptions and imperfect days. If a gathering is missed, return without guilt. The goal is not a flawless religious performance but a home where turning toward God becomes natural in celebration, uncertainty, and need.",
        ],
      },
      {
        heading: "Let Prayer Shape Family Culture",
        paragraphs: [
          "Keep a record of requests and answered prayers. Revisiting them teaches children that God is present in the family's real story. It also moves testimony from a vague idea to a shared memory.",
          "Use the altar to bless one another, reconcile quickly, and pray beyond your own household. Families become spiritually strong when prayer produces forgiveness inside the home and compassion for people outside it.",
        ],
      },
    ],
    relatedSlugs: ["raising-the-next-generation-of-kingdom-leaders", "discipline-the-quiet-engine-of-destiny"],
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
    sections: [
      {
        heading: "Design the Environment for Consistency",
        paragraphs: [
          "Willpower is unreliable when the environment continually pulls in the opposite direction. Prepare what you need the night before, remove obvious distractions, and make the desired action easier to begin. Small arrangements can protect important commitments.",
          "Connect each habit to a clear purpose. Reading, prayer, exercise, and focused work last longer when they are understood as preparation for service rather than attempts to prove personal worth.",
        ],
      },
      {
        heading: "Recover Quickly After a Missed Day",
        paragraphs: [
          "Discipline is not the absence of failure; it is the refusal to turn one failure into an identity. Review what interrupted the rhythm, make one useful adjustment, and begin again at the next opportunity.",
          "Track progress over weeks rather than judging one difficult day. Quiet growth often becomes visible only after repetition has formed capacity. Celebrate faithfulness, then keep moving without becoming impressed by your own momentum.",
        ],
      },
    ],
    relatedSlugs: ["the-power-of-vision-and-purpose-in-the-kingdom", "kingdom-stewardship-and-financial-integrity"],
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
    sections: [
      {
        heading: "Discern the Difference Between Escape and Direction",
        paragraphs: [
          "Not every desire to leave is divine leading. Exhaustion, offense, comparison, and impatience can make any new place look like promise. Allow time for motives to settle before treating discomfort as instruction.",
          "Test the direction through scripture, prayer, wise counsel, and the responsibilities already entrusted to you. God's guidance will not require dishonesty or careless abandonment of commitments in order to appear spiritual.",
        ],
      },
      {
        heading: "Honor Both the Departure and the Arrival",
        paragraphs: [
          "Finish well where possible. Express gratitude, communicate clearly, settle obligations, and release relationships without unnecessary conflict. The way you leave one season often influences the health with which you enter the next.",
          "In the new place, resist the urge to recreate immediate familiarity. Listen, learn, serve, and allow fresh relationships to develop at a healthy pace. Relocation becomes fruitful when obedience is followed by humility and patient roots.",
        ],
      },
    ],
    relatedSlugs: ["the-power-of-vision-and-purpose-in-the-kingdom", "raising-the-next-generation-of-kingdom-leaders"],
  },
];

export const getArticleBySlug = (slug?: string) =>
  articles.find((a) => a.slug === slug);