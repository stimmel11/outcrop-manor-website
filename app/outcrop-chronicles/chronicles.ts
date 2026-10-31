export interface Chronicle {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  audioSrc?: string; // path under /audio/chronicles/
  content: string; // HTML string
}

export const chronicles: Chronicle[] = [
  {
    slug: "the-house-that-wouldnt-let-them-leave",
    title: "Outcrop Manor: The House That Wouldn't Let Them Leave",
    date: "October 31, 2026",
    author: "Melissa McGinness",
    excerpt: "A Halloween legend for the history books — or maybe something more. The story of the land beneath Outcrop Manor, the things that were found there, and the things that never left.",
    image: "/images/blog/outcrop-manor-poster.webp",
    imageAlt: "Outcrop Manor: The House That Wouldn't Let Them Leave — movie poster style illustration with full moon and horseman silhouette",
    audioSrc: "/audio/chronicles/the-house-that-wouldnt-let-them-leave.mp3",
    content: `
      <div style="text-align:center; margin: 0 auto 2.5rem; max-width: 560px;">
        <img src="/images/blog/outcrop-manor-poster.webp" alt="Outcrop Manor: The House That Wouldn't Let Them Leave" style="width:100%; border-radius:12px; box-shadow: 0 8px 40px rgba(0,0,0,0.22);" />
      </div>

      <p><em>A Halloween story by Melissa McGinness. The following is a work of fiction — a legend born from a house with too many hallways and too many nights spent alone in it.</em></p>

      <h2>Chapter One: The American Dream</h2>
      <p>In 2003, a young couple from Colorado Springs bought thirty-five acres outside Byers — rocky, windswept, and cheap enough that they could still afford to build. They had plans drawn up, a contractor hired, and a name picked out before the first shovel broke ground: Ridgeline House. Their dream was simple. A big stone manor, rooms for the kids they planned to have, a porch that faced west so you could watch the sunset over the foothills every single evening for the rest of your life.</p>
      <p>It was a good dream. The kind that doesn't leave room for doubt.</p>
      <p>They broke ground in April. By June, the excavators had gone three feet into the foundation when one of the crew hit something that wasn't rock.</p>

      <h2>Chapter Two: The Thing Beneath the House</h2>
      <p>It was a skeleton. Nearly complete, missing only the skull.</p>
      <p>The sheriff came out. The county medical examiner came out. Eventually, a forensic anthropologist from CU came out and said the remains were consistent with the late 1800s — male, likely between thirty and fifty years old at death, and buried without ceremony in what appeared to have been a shallow grave. No skull was ever recovered. No name was ever attached to the bones.</p>
      <p>An old rancher who'd worked that land for fifty years before selling it showed up uninvited at the construction site one afternoon. He didn't say much. He looked at the hole, looked at the couple, and said: <em>"There was always talk about a man who rode through here without a head. Story was he left it somewhere and never stopped looking."</em></p>
      <p>He left before they could ask what that meant.</p>
      <p>Construction resumed. The bones were removed, catalogued, and eventually buried in a county plot. The couple told themselves it was just history. Just land. Just Colorado doing what Colorado does — turning up the past when you dig too deep.</p>

      <h2>Chapter Three: Till Death Do Us Part</h2>
      <p>The wife started having dreams that October. A rider on a dark horse, crossing the property line just before dawn. No face. No head. Just the horse and the shape of a man and the sound of hooves on frozen ground.</p>
      <p>She told her husband. He told her it was stress. He told her it was the project. He told her a lot of things that weren't quite right.</p>
      <p>By Christmas, she was sleeping with the light on. By February, she had moved into her mother's house in Pueblo and filed for divorce.</p>
      <p>Her husband stayed. He finished the house — or tried to. The contractors kept quitting. One claimed his equipment moved overnight. Another said he'd heard something in the walls that sounded like breathing. A third simply stopped answering his phone.</p>
      <p>The man lived in the unfinished house alone for eight months before he sold it at a steep loss and moved to Phoenix. He never spoke publicly about why.</p>

      <h2>Chapter Four: The Man Who Didn't Believe in Ghosts</h2>
      <p>The next buyer was a retired engineer from Denver — a practical man, a skeptic, a widower with a motorized wheelchair and a fondness for order. He liked the bones of the house. Good stone. Good bones. A solid structure someone had abandoned for what he assumed were personal reasons.</p>
      <p>He hired a new crew to finish the interior. They worked without incident for three weeks.</p>
      <p>Then one of his workers — a framer from Fountain — went to use the elevator shaft to lower some materials to the basement level. When his crew went to find him for lunch, the shaft was empty. The man was gone. His tools were still on the second floor. His truck was still in the driveway.</p>
      <p>He was never found.</p>
      <p>The engineer closed the elevator shaft with plywood and insisted it was an accident, a wandering worker, a misunderstanding. He moved into the house the following spring.</p>
      <p>He lasted eleven months.</p>

      <h2>Chapter Five: The Night Construction Stopped</h2>
      <p>What happened to the engineer has never been fully explained. His daughter — who drove out after he stopped returning her calls — found the house unlocked, the lights on, a half-eaten dinner on the table, and her father's wheelchair at the bottom of the staircase.</p>
      <p>The coroner ruled it an accidental fall.</p>
      <p>The daughter disagreed. She sold the property as-is, contents included, and donated her inheritance to a Denver hospice in her mother's name. She has reportedly never returned to Teller County.</p>

      <div style="margin: 2.5rem 0; border-radius: 12px; overflow: hidden;">
        <img src="/images/blog/zombie-hand-mud.webp" alt="A hand emerging from mud at sunset near the stone structure of Outcrop Manor" style="width:100%; display:block;" />
      </div>

      <h2>Chapter Six: Twenty Years</h2>
      <p>The house sat empty for the better part of two decades.</p>
      <p>Kids from Byers and Woodland Park would dare each other to spend the night. Most didn't make it past the driveway. A few went inside. In 2012, a group of teenagers broke in on Halloween and were found the next morning on the porch, unable to explain what they had heard or why they had all, independently, drawn the same shape on the backs of their hands — a crescent moon with a rider on it — without remembering doing so.</p>
      <p>The property changed hands twice more, both times quickly, both times at a loss.</p>
      <p>By 2024, the county had grown tired of the vandalism complaints. The roads in had been improved. The stone walls were still standing, solid as the day they were laid. Someone, eventually, was going to see what a property like this could become.</p>

      <h2>Chapter Seven: Welcome to Outcrop Manor</h2>
      <p>That someone was us.</p>

      <div style="margin: 2.5rem 0; border-radius: 12px; overflow: hidden;">
        <img src="/images/blog/horror-staircase.webp" alt="Guests with flashlights approaching the grand staircase at Outcrop Manor in the dark" style="width:100%; display:block;" />
      </div>

      <p>We poured everything into this house. Every broken window replaced. Every door rehung. The elevator — sealed since the framer disappeared — was professionally inspected, recertified, and reopened. The staircase got new treads, new sconces, new life. We named the rooms after Colorado legends. We filled the walls with art and the pantry with good food and we opened the doors to women who needed a place to breathe.</p>
      <p>The first retreat group arrived on a Thursday in October 2026. They brought craft supplies and wine and laughter that echoed off the stone walls in a way that felt, for the first time in years, like joy.</p>

      <div style="margin: 2.5rem 0; border-radius: 12px; overflow: hidden;">
        <img src="/images/blog/crafting-room-night.webp" alt="A group of women working on crafts by lamplight at Outcrop Manor, with the Headless Horseman silhouette visible in the window" style="width:100%; display:block;" />
      </div>

      <p>On Friday night, one of the guests noticed muddy bootprints on the staircase. Starting at the front door. Going up.</p>
      <p>No one had come in. The doors had been locked.</p>
      <p>They took a photo. They laughed about it. They went to bed.</p>

      <h2>Chapter Eight: High Noon</h2>
      <p>The guest in the High Noon bedroom woke at 3 a.m. to the sound of something outside her window. A rhythmic sound. Like hooves on frozen ground.</p>
      <p>She looked through the curtain. The property was dark. Empty. Just the wind moving through the dry grass and the big Colorado sky overhead, full of stars.</p>
      <p>In the morning, she came downstairs to find a message on the bathroom mirror — written in something dark, in a handwriting no one recognized:</p>
      <p style="text-align:center; font-size: 1.3em; font-style: italic; color: #8B0000; letter-spacing: 0.04em; margin: 1.5rem 0;"><strong>I'VE BEEN LOOKING FOR IT.</strong></p>
      <p>She checked out early.</p>
      <p>We've had a cleaning crew through three times since then. The mirror is spotless. The bootprints are gone.</p>
      <p>The elevator, however, has started opening on its own at night. The third floor. Every night. Like clockwork.</p>
      <p>We've called the service company. They say there's nothing wrong with it.</p>

      <h2>One Last Thing Before Bed</h2>
      <p>We love this house. We genuinely do. And we've put our hearts into making it a place where women can gather and rest and create together.</p>
      <p>But every old house has a story. Every piece of land has a past.</p>
      <p>And sometimes — if you're very quiet, in the hour before dawn, when the wind drops and the stars are sharp — you can hear something out there on the property. Something that sounds like hooves.</p>
      <p>Something that sounds like it's still looking.</p>

      <div style="text-align:center; margin: 2.5rem auto 0; max-width: 320px;">
        <img src="/images/blog/melissa-mcginness-signature.webp" alt="Melissa McGinness signature" style="width:100%;" />
      </div>

      <p style="text-align:center; font-size:13px; color: var(--forest-soft); opacity:0.6; margin-top: 0.5rem;"><em>Happy Halloween from Outcrop Manor. The story above is fiction — mostly. Book your stay at booking.outcrop-manor.com if you dare.</em></p>
    `,
  },
];

export function getChronicle(slug: string): Chronicle | undefined {
  return chronicles.find((c) => c.slug === slug);
}
