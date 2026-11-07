export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string; // path under /images/blog/
  imageAlt?: string;
  content: string; // HTML string
}

export const posts: BlogPost[] = [
  {
    slug: "the-quilt-that-waited-ten-years",
    title: "The Quilt That Waited Ten Years: A Love Story Stitched Together by a Troublemaker",
    date: "November 1, 2026",
    author: "Melissa McGinness",
    excerpt: "Ten years ago I started cutting up Chris's concert T-shirts to make him a quilt. I got overwhelmed, folded it up, and stuffed it in a closet. Then he got cancer. And then I met Jeanette.",
    image: "/images/blog/tshirt-quilt.webp",
    imageAlt: "T-shirt memory quilt made from concert tees spread across a bed at Outcrop Manor",
    content: `
      <p>This started more than ten years ago.</p>
      <p>I had a plan — a good one. I was going to make Chris a quilt from his old concert T-shirts. The ones stuffed in drawers and boxes, the ones from shows we went to before kids, before careers, before everything got complicated. I cut the shirts into squares. I had a whole vision.</p>
      <p>Then I got overwhelmed. I didn't know what I was doing. I folded it all up and put it in a closet.</p>
      <p>Chris asked about it, off and on, for years. "Whatever happened to that quilt?" Every time he asked, I felt a small wave of guilt. And every time, I said I'd get back to it.</p>
      <h3>Then he got sick</h3>
      <p>When Chris was diagnosed, I thought about that quilt. I wanted him to have it during treatment. Something warm, something ours, something made of all those nights we were just two people having a great time.</p>
      <p>I didn't finish it then either. The timing wasn't right. Life had too many moving parts.</p>
      <h3>Then I met Jeanette</h3>
      <p>She came through Outcrop Manor — one of those guests who feels immediately like someone you've known for a long time. At some point I told her the quilt story. The whole thing. The shirts, the closet, the decade of guilt, the cancer, all of it.</p>
      <p>She finished the quilt.</p>
      <p>When we opened it and spread it across the bed, it was like a timeline. There's a 311 cruise shirt — the one from a trip that involved a beach house, a lot of laughing, and a lost ID that a stranger returned somewhere in the Caribbean. There are shirts from shows I barely remember and ones I'll never forget.</p>
      <p>And Jeanette had embroidered words from a 311 song into the quilt. If you know the song, you know why that hit the way it did.</p>
      <h3>What I want to say to Jeanette</h3>
      <p>You didn't just finish a quilt. You gave us something that holds a version of our life together — the version before everything got hard, and also the version we're in now, which is hard and also full and also worth every minute.</p>
      <p>I share this every November as part of our family's gratitude tradition. This year, this is the thing I'm most grateful for.</p>
      <p>If you haven't listened to the Elovaters' <em>Gimme Love</em> — do it. That's all I'll say.</p>
      <p>Thank you, Jeanette. We love you.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "stairs-getting-dressed-up",
    title: "The Stairs Are Getting Dressed Up. Your Inner Ninja Has Been Retired.",
    date: "October 29, 2026",
    author: "Melissa McGinness",
    excerpt: "New motion-activated sconces, patterned nonslip treads, and a few friendly reminders about safe stair habits at Outcrop Manor.",
    image: "/images/blog/stairs-sconces.webp",
    imageAlt: "Outcrop Manor staircase with new LED sconces and patterned nonslip treads",
    content: `
      <p>We've been busy making the staircases at Outcrop Manor safer and a little more beautiful. New motion-activated wall sconces are now installed, and patterned nonslip treads have been added to the Hitching Post staircase. More lighting improvements are on the way.</p>
      <p>A few friendly reminders for guests while the finishing touches are still coming together:</p>
      <h3>Lighting</h3>
      <p>Please turn on the main hallway and staircase lights before using the stairs. The motion lights and nightlights are supplementary — they're there to help, not to replace the overhead switches.</p>
      <h3>Carrying items</h3>
      <p>Don't carry anything that blocks your view or requires both hands on the staircase. If you're hauling supplies, craft bins, or luggage — use the elevator, ask for help, or make two trips. That's what the elevator is there for.</p>
      <h3>The elevator</h3>
      <p>Guests with mobility, balance, vision, or fatigue concerns should always use the elevator. If you have accessibility needs, please share them with us before your stay so we can make sure everything is set up right for you.</p>
      <h3>Footwear and clutter</h3>
      <p>Wear shoes or slippers with nonslip soles on the stairs. Keep the stairs clear of bags, bins, and belongings. And yes — phones away while on the stairs. We know, we know.</p>
      <h3>Report any issues</h3>
      <p>If you notice a loose tread, a damaged railing, or a malfunctioning light — stop using that area and let us know right away. We take that stuff seriously.</p>
      <p>Carpet for the landing and lower stair areas is still on its way, so those spots need a little extra care in the meantime. The steps, handrails, and existing lighting have all been checked and are secure and in good working order.</p>
      <p>Thanks for helping us keep Outcrop a safe and welcoming place for everyone.</p>
      <p><em>— Melissa &amp; Chris</em></p>
    `,
  },
  {
    slug: "mystery-surprises-question-for-you",
    title: "Outcrop Manor: A Little Mystery, Some Big Surprises, and a Question for YOU!",
    date: "October 15, 2026",
    author: "Melissa McGinness",
    excerpt: "A quilting surprise is coming, stories behind the artwork, and Melissa asks the Outcrop community for input on what comes next.",
    image: "/images/blog/quilting-surprise.webp",
    imageAlt: "New shelving installed in Outcrop Manor as a surprise for quilting groups",
    content: `
      <p>There's a lot happening at Outcrop Manor, and I wanted to share some of it — plus ask for your input on a few things we're deciding right now.</p>
      <h3>A quilting surprise</h3>
      <p>Something new is coming for our quilting groups. I'm keeping the details under wraps until it's all set up, but I think you're going to love it. Stay tuned.</p>
      <h3>Stories behind the artwork</h3>
      <p>I've been thinking about writing a story for each piece of artwork in the house — a mix of true family stories, local history, and a little fiction. Hidden connections between them as Easter eggs for guests who look closely. Would you want to find those? Let me know.</p>
      <h3>The community that shows up</h3>
      <p>It's been a stretch for our family lately, and I want to acknowledge the women who have quietly shown up — helping with turnovers, leaving small gifts for the next group coming in, checking in. That kindness means more than I can say right now.</p>
      <h3>What might be coming</h3>
      <p>I'm weighing a small craft supply shop on-site, better tools for scrapbookers and paper crafters, demonstrations, supply swaps, project displays, and a community idea board. None of this is decided — which is why I'm asking you.</p>
      <h3>Still a work in progress</h3>
      <p>Patio furniture and a few construction items are still on the list. Outcrop is very much a living, evolving place. I kind of love that about it.</p>
      <p>I'd genuinely love to hear from you: What stories would you want to find? Would you shop a small supply store? What tools do you wish retreats had? What made your favorite retreat experience unforgettable?</p>
      <p>Drop a comment or reach out directly. I read everything.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "sugar-spice-are-you-kidding-me",
    title: "Sugar, Spice & Are You F'n Kidding Me?",
    date: "September 26, 2026",
    author: "Melissa McGinness",
    excerpt: "The elevator broke mid-weekend, a workbench collapsed, and a fire alarm went off at midnight. Also: Chris played 90 minutes of soccer during radiation. Life is both.",
    image: "/images/blog/coffee-spill.webp",
    imageAlt: "Coffee dripped down the Outcrop Manor staircase — one of those weeks",
    content: `
      <p>I spent way too long trying to title this post. Something warm and welcoming didn't feel right. A list of everything going wrong didn't either. Because the truth is — life is both. It's the sugar and the spice and the moments where you look up and say, are you kidding me?</p>
      <p>So here's an honest version of a recent Outcrop weekend.</p>
      <h3>The elevator stopped working</h3>
      <p>Mid-retreat. We couldn't leave right away because Chris was finishing radiation — yes, stage IV cancer, yes, he's still going — so once he was done, we drove out and reset it ourselves. It's working again. But in that moment? Are you kidding me.</p>
      <h3>The list kept growing</h3>
      <p>Guests needed more shelving. A mini-split air conditioner started leaking. I sent invoices to the wrong retreat group while rushing. A workbench I built collapsed — because I hadn't tightened the bolts. A leak appeared under a sink. A fire alarm went off in the middle of the night. The cleaners canceled. Coffee went down the staircase.</p>
      <p>All of it in a single stretch. Are. You. Kidding. Me.</p>
      <h3>Also: Chris played 90 minutes of soccer</h3>
      <p>During his radiation treatment window. Ninety minutes. The man is something else.</p>
      <h3>A word about keeping it personal</h3>
      <p>A marketer told me I shouldn't include my family — or Chris's illness — in my business messaging. That it makes things messy. I understand the logic. I also felt it hit a guilt I already carry about building something during one of the hardest seasons of our lives.</p>
      <p>But here's what I know: Outcrop isn't a brand. It's a place built by real people in the middle of a real life. I want guests to feel that when they're here. You weren't just booking a retreat. You were part of the story of this place becoming what it's meant to be.</p>
      <p>So yes — sometimes that story includes a collapsed workbench and a midnight fire alarm. And somehow also soccer. And that feels right to me.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "falling-in-love-with-this-house",
    title: "I Think I'm Falling in Love With This House",
    date: "August 10, 2026",
    author: "Melissa McGinness",
    excerpt: "Bookings are nearly full, contractors are quoting wildly different prices, and there may or may not be a mouse problem. Also: Ninja coffee machines are in.",
    image: "/images/blog/man-at-beach.webp",
    imageAlt: "A quiet moment — the kind of reset that Outcrop Manor is built for",
    content: `
      <p>I know that sounds dramatic. But I'm starting to think Outcrop Manor has been waiting for someone to love it — and we're that someone.</p>
      <h3>Where bookings stand</h3>
      <p>Fully hosted retreats have come down from about 225 spots to about 30 — mostly in November and December. Private retreat weekends are nearly full. If your group has been thinking about it, now is the time to reach out. I want returning groups to be able to hold their weekends year after year, and that's easier to make happen if we start early.</p>
      <h3>The contractor situation</h3>
      <p>I've learned something: quotes can differ significantly depending on who's in the room asking. Safety items — water, electrical, heating, locks, windows — are all being addressed. We're working through them methodically.</p>
      <h3>The mouse situation (or non-situation)</h3>
      <p>A pest company quoted us $17,000 for an insulation overhaul. Then I overheard some of their workers expressing doubt about the scope of the problem. We got a second opinion. Turns out: no major infestation, just some prevention and maintenance recommended. We saved $16,500 and learned to always get a second opinion.</p>
      <h3>Kitchen and water</h3>
      <p>The big commercial refrigerator doesn't have a freezer or ice maker — so a garage freezer and ice machines are in the plan. The property runs on well water with filtration, and we're looking at bottled water delivery for guests as well.</p>
      <h3>The details that make it feel like home</h3>
      <p>Beds are going together. We're working through whether cube organizers or luggage racks make more sense per room. Ninja coffee machines are in and I am very pleased about this. A neighbor may bring horses to graze on the property, which would be delightful.</p>
      <p>November and December retreats are open for holiday crafting — making gifts, finishing projects, being in a beautiful space with your people. If that sounds like your kind of thing, let's get it on the calendar.</p>
      <p>This house is getting there. And every time I walk through it, I feel a little more certain it's going to be exactly what we imagined.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "day-6-learning-to-slow-down",
    title: "Day 6: Learning to Slow Down... Sort Of",
    date: "July 20, 2026",
    author: "Melissa McGinness",
    excerpt: "Melissa planned a day off. Her inbox had other ideas. Then her kids showed up with flowers, and Chris brought barbecue.",
    image: "/images/blog/bbq-vendors.webp",
    imageAlt: "BBQ spread being tested as catering for Outcrop Manor hosted retreats",
    content: `
      <p>Sunday was supposed to be a day off.</p>
      <p>I woke up and checked my messages — just quickly — and three hours later I was still in bed answering emails, confirming bookings, and sketching out plans for things that didn't exist yet. So. About that day off.</p>
      <h3>The best kind of interruption</h3>
      <p>At 11:00 a.m., my kids surprised me. Music, flowers, cards. We stopped everything and just celebrated what we're building together. It was exactly what I needed, even though I didn't know I needed it.</p>
      <p>Then Chris showed up with barbecue he's been testing as a potential meal option for hosted retreats. It was filling, delicious, and affordable. It's going on the list.</p>
      <h3>Back to it</h3>
      <p>Between a salon visit and errands, I fit in more messages. I'm sorry to everyone waiting for a reply — Outcrop is moving fast and I'm doing my best to keep up. There are still openings available if your group is looking.</p>
      <p>That night we watched <em>House of the Dragon</em>. I fell asleep early. I woke up at 1:00 a.m. thinking about three things I hadn't finished.</p>
      <p>This is what it feels like right now: busy, exciting, overwhelming, and exactly right. I wouldn't trade it.</p>
      <p>Looking forward to Day 7.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "day-5-empty-house-filled-with-dreams",
    title: "Day 5 at Outcrop Manor: An Empty House Filled with Dreams",
    date: "July 19, 2026",
    author: "Melissa McGinness",
    excerpt: "About 35 women toured an empty Outcrop Manor on sneak peek day. Most groups booked before they left.",
    image: "/images/blog/virtual-open-house.webp",
    imageAlt: "Cookies and table settings for the Outcrop Manor sneak peek open house",
    content: `
      <p>Today about 35 women came through to see Outcrop Manor before the first official retreat. The house was empty — no beds, no furniture in the event center yet — and still, most groups booked before they walked out the door.</p>
      <p>That meant everything to me.</p>
      <h3>What I forgot</h3>
      <p>Hand towels. Soap. I had the cookies and the water, but I forgot the hand towels and soap. Noted for next time.</p>
      <h3>What guests asked for</h3>
      <p>Several groups were interested in fully hosted quilting retreats — something I haven't focused on yet (most of my retreat experience is in scrapbooking). If you're part of a quilting community looking for a retreat home, I'd love to connect. And guests mentioned they'd prefer more beds per room even if they're not all used, which is making me rethink my original plan to keep rooms lean.</p>
      <h3>What's happening on the property</h3>
      <p>Chris and a neighbor started mowing and clearing the grounds. Athena is filming house walkthrough videos. And online booking with payments is close to launching — Venmo and PayPal are still available in the meantime.</p>
      <h3>Family news</h3>
      <p>Tomorrow we're celebrating as a family: Athena landed an internship, and Ryleigh just earned his private pilot's license. Pretty good week around here.</p>
      <p>After five days, this house already feels like home. I can't wait for guests to feel that too.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "day-4-dust-dreams-building",
    title: "Day 4: Dust, Dreams & Building Something Worth Coming Home To",
    date: "July 17, 2026",
    author: "Melissa McGinness",
    excerpt: "5am emails, ten new bookings, a garage door fix, a giant cucumber, and the search for seamless six-foot desks.",
    image: undefined, // TODO: add /images/blog/day-4-dust-dreams-building.jpg
    content: `
      <p>Up at 5:00 a.m. answering emails from bed. This is my life now, and honestly? I don't hate it.</p>
      <p>Good news came fast today: Chris is feeling well after his procedure, and ten new retreat bookings came in overnight. That combination made it easier to tackle everything else.</p>
      <h3>The craft space decisions</h3>
      <p>I'm working through furniture for the main event center, which will host up to sixteen women at a time. I want bright, warm, six-foot adjustable desks with L-shaped returns — something that gives crafters real estate without a seam running through the middle of their workspace. Finding that combination at the right price point is harder than it sounds. Still looking.</p>
      <h3>The house list</h3>
      <p>Today: the garage door motors and rollers got fixed — finally. Electrician still needed for the garage outlets. The main-floor mini-split AC is running, though it needs additional work and the hoses are still leaking. The boiler and radiant floor heat are scheduled for next week.</p>
      <p>Other items still on the board: upstairs and basement windows that need replacing, unsealed exterior openings, a roof that's past its life, and well water that's still running yellow as we flush the lines. No doorbell yet either. Many of the contractors, entertainingly, are named Chris. This has become a running joke.</p>
      <h3>Also from today</h3>
      <p>My community garden's water line was off — but I found a giant cucumber while I was there, which felt like a win. Athena got an internship. Ryleigh got his private pilot's license. This family.</p>
      <p>Every day this house feels a little less abandoned and a little more like what it's supposed to be. I hope you'll come see it someday.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "day-3-good-problems-to-have",
    title: "Day 3: Good Problems to Have",
    date: "July 16, 2026",
    author: "Melissa McGinness",
    excerpt: "Chris's procedure went smoothly, the inbox is overflowing with booking requests, and Melissa is building it for all of us.",
    image: undefined, // TODO: add /images/blog/day-3-good-problems-to-have.jpg
    content: `
      <p>Chris's stent-removal procedure went smoothly. He's home resting — and already talking about going back to work on the house. That man does not slow down.</p>
      <h3>The inbox situation</h3>
      <p>While he was in surgery, I planned to catch up on emails. The procedure ended faster than expected, so I didn't get far. But the inbox is full of booking requests, messages, and questions from people who found Outcrop and want in.</p>
      <p>I keep telling myself: these are exactly the kinds of problems I've been praying for. An overwhelming inbox full of people who want to come here? That's the dream. I'm sorry to everyone waiting — I'm working through it as fast as I can, and an online booking system (Chris's domain) is coming soon.</p>
      <h3>What's next</h3>
      <p>House visits on Thursday and Saturday. A family birthday celebration on Sunday — which also happens to be the World Cup Final, so that should be a good afternoon.</p>
      <h3>A question for you</h3>
      <p>What would make a retreat better for you? What do you wish every retreat house had — whether you're a crafter or not? I want Outcrop to be genuinely comfortable and welcoming for everyone who comes through.</p>
      <p>I'm building it for all of us. Tell me what that looks like for you.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "day-2-the-main-floor",
    title: "Day 2: The Main Floor",
    date: "July 16, 2026",
    author: "Melissa McGinness",
    excerpt: "Five hours of cleaning, a flooded laundry room, remote-controlled ceiling fans, and a chandelier that made the whole thing worth it.",
    image: "/images/blog/crystal-chandelier.webp",
    imageAlt: "Crystal chandelier cascading in the Outcrop Manor stairwell",
    content: `
      <p>Melissa, her daughter Athena, and family friend Dylan spent five hours on the main floor today. Bathrooms, countertops, windows, the refrigerator — all of it.</p>
      <h3>The surprises</h3>
      <p>First unexpected costs: two garage door motors and an electrician for non-working outlets. The washer and dryer don't work. The washer flooded the laundry room during testing. New appliances are now on the list.</p>
      <h3>The delights</h3>
      <p>The entry chandelier. The remote-controlled ceiling fans. Dylan fixed the upstairs mini-split AC by replacing the remote batteries — which was either a very simple fix or a very humbling one, depending on how you look at it.</p>
      <p>The main-level AC unit has an HVAC visit scheduled.</p>
      <h3>What this house was built for</h3>
      <p>The 1,600-square-foot event center is extraordinary. I keep walking through it imagining what it will look like full of crafting pods, quilting walls, vendor areas. It was built for exactly this. You can feel it.</p>
      <h3>Come see it Saturday</h3>
      <p>If you want to see the house before it's decorated, come Saturday. It's still empty and under construction, but the bones are there and I'd love to show you around.</p>
      <p>Bookings are open. This place was designed to support annual retreats — to give groups a home they come back to year after year. And it was designed with some flexibility in mind: I need to be able to support Chris during his treatment without being locked into a schedule that doesn't bend. Outcrop lets me do both.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "day-one-at-outcrop-manor",
    title: "Day One at Outcrop Manor",
    date: "July 14, 2026",
    author: "Melissa McGinness",
    excerpt: "Construction started around 2006 but no one ever really lived here. Melissa and Athena cleaned the 1,600 sq ft event center by hand, and by the end of the day a quarter of the year was already booked.",
    image: "/images/blog/horses-fence.webp",
    imageAlt: "Two horses silhouetted against the open Colorado sky near Outcrop Manor",
    content: `
      <p>I insisted on cleaning the house myself — with Athena — before handing anything off to a professional crew. I needed to understand its condition firsthand. To know what we were actually working with.</p>
      <p>The 1,600 to 1,700 square foot event center alone took hours to sweep and mop. It's a big, beautiful space.</p>
      <h3>What we found</h3>
      <p>Construction began around 2006, but the house appears to have barely been lived in. The result is a strange and wonderful mix: high-end finishes (brick construction, zero-entry showers, radiant floors, an elevator) alongside some uneven work in a few of the bathrooms and vanities. It has the bones of something exceptional, with a few spots that need intention and care.</p>
      <h3>What comes next</h3>
      <p>Major systems inspection and service over the coming weeks. Broken windows replaced. Split air conditioning systems evaluated. Radiant floors checked. The elevator professionally serviced before any guests use it. Safety and function come first — always.</p>
      <h3>Come by Saturday</h3>
      <p>If you want to see it before it's decorated, you're welcome Saturday. The house is empty and under construction. Bring your imagination.</p>
      <h3>The opening</h3>
      <p>The first fully hosted retreat is at the end of August. After that, the house officially opens. Bookings came in quickly — by the end of the first day, nearly a quarter of the year was already reserved.</p>
      <p>Landscaping will take longer. For now: open country, sunsets, and nights so dark you can see everything in the sky. Bring cowboy boots if you have them.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "we-did-it-last-chapter",
    title: "We Did It (Last Chapter)",
    date: "July 14, 2026",
    author: "Melissa McGinness",
    excerpt: "How scrapbooking, a collapsed deal, a foreclosure, and a second chance led to Outcrop Manor.",
    image: "/images/blog/pilot-certificate.webp",
    imageAlt: "Young man holding his temporary airman certificate after earning his private pilot license",
    content: `
      <p>This story is really about purpose.</p>
      <p>Scrapbooking led me here, but that's not the whole truth. The whole truth is that my family came first — always — and everything I've built has been shaped around that. My son's health challenges, and then Chris's diagnosis, changed how I thought about time. About what I wanted to create and why.</p>
      <p>Over years of attending retreats, I accumulated ideas: what worked, what was missing, what a space built specifically for crafters could look like if someone did it thoughtfully. Comfortable. Accessible. Well-designed for the work people actually do there.</p>
      <h3>The house that almost wasn't</h3>
      <p>I found a property in Woodland Park and made an offer. We got to closing. And then the deal collapsed. I was devastated in a way I didn't expect — which told me something about how much I wanted this.</p>
      <p>I walked away. Or I tried to. Then the house came back on the market through foreclosure. My offer was accepted.</p>
      <h3>What Outcrop is meant to be</h3>
      <p>A place of creativity, friendship, and tradition. A place where groups come back year after year. A place that holds people well — in the fullest sense of that phrase.</p>
      <p>I'll be sharing the renovation journey here as we go. I hope you'll follow along.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "the-vision-one-thoughtful-space-at-a-time",
    title: "The Vision: One Thoughtful Space at a Time",
    date: "May 28, 2019",
    author: "Melissa McGinness",
    excerpt: "Each room at Outcrop Manor is being designed around one question: how does this make the retreat experience better?",
    image: undefined, // TODO: add /images/blog/the-vision-one-thoughtful-space-at-a-time.jpg
    content: `
      <p>Every decision I'm making about this house starts with the same question: <em>How does this make the retreat experience better?</em></p>
      <p>That's it. That's the filter.</p>
      <h3>The house</h3>
      <p>Built nearly twenty years ago with quality bones — it seems to have been lived in only briefly, if at all. It feels like it's been waiting for someone to love it. We're that someone.</p>
      <h3>What needs to happen first</h3>
      <p>The roof is at the end of its life. Mechanical systems need servicing. The patios need repair work. A few bathrooms are unfinished. None of this is surprising for a house that sat largely empty — but all of it gets addressed before guests arrive.</p>
      <h3>The phased approach</h3>
      <p>First: make the home healthy, safe, and reliable. Second: make sure each retreat is genuinely comfortable. Third: design each room intentionally, after watching how guests actually use the space. I'd rather wait and get it right than rush and get it wrong.</p>
      <h3>What I'd love from you</h3>
      <p>I want to hear your wish list. What would make a retreat space exceptional for you? What do you wish you'd found at retreats you've attended? What's missing in the world of group getaways?</p>
      <p>Tell me. I'm building this with you in mind, and I intend to keep listening as each room evolves.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "we-did-it",
    title: "We Did It",
    date: "May 28, 2019",
    author: "Melissa McGinness",
    excerpt: "The story of how a birthday gift, a grandmother's teaching, and a hard drive lost in Australia led to the idea of Outcrop Manor.",
    image: undefined, // TODO: add /images/blog/we-did-it.jpg
    content: `
      <p>We did it. After everything — and I mean everything — we bought Outcrop Manor.</p>
      <p>I want to tell you how we got here, because the short version doesn't do it justice.</p>
      <h3>Where it started</h3>
      <p>Shortly after my first son was born, I received a scrapbook binder as a birthday gift. My grandmother had already taught me to sew, embroider, knit, and bake — so the idea of making something by hand, something that held meaning, felt natural.</p>
      <p>Scrapbooking became that for me. A way of preserving what mattered.</p>
      <h3>The hard drive</h3>
      <p>When our family moved to Australia, a hard drive was destroyed. Most of my children's baby photos — gone. The physical albums I had already made became irreplaceable overnight. That moment crystallized something for me: what I was doing wasn't a hobby. It was preservation. It was a gift I was making for my children, for their children.</p>
      <p>That realization eventually led here — to a 35-acre property in the Colorado foothills, and a house that's going to become exactly the retreat space I always wished existed.</p>
      <p>More to come. I promise.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "we-did-it-part-2",
    title: "We Did It. (Part 2)",
    date: "May 28, 2019",
    author: "Melissa McGinness",
    excerpt: "Ranch Country Club, a woman named Rhonda, and the question that changed how Melissa thought about her scrapbooks.",
    image: undefined, // TODO: add /images/blog/we-did-it-part-2.jpg
    content: `
      <p>After we moved back from Australia, I joined Ranch Country Club in Westminster. That's where I learned that scrapbooking clubs existed — that other people were doing what I'd been doing, together.</p>
      <p>I thought I'd invented this on my own. I had not.</p>
      <h3>Rhonda</h3>
      <p>At one of the retreats, I met Rhonda — "RonLexa" — who introduced me to Creative Memories. I became an advisor, mostly for the discount. But I was at the table now, surrounded by people who cared about this the way I did.</p>
      <h3>The question that changed everything</h3>
      <p>Another attendee looked at my layouts and asked: "Where's your journaling?"</p>
      <p>I didn't have an answer. My albums were full of photos and beautiful arrangements, but they were missing the stories behind them. That question stayed with me.</p>
      <p>I took my existing scrapbooks apart. Scanned the photos. Started over, chronologically, with journaling. Began creating albums organized differently — one per child, one per theme. I went deeper.</p>
      <h3>What that community gave me</h3>
      <p>The support, the ideas, the sense of shared purpose — that's what I want to give guests at Outcrop Manor. A place where you arrive a stranger and leave part of something.</p>
      <p><em>— Melissa</em></p>
    `,
  },
  {
    slug: "we-did-it-part-3",
    title: "We Did It (Part 3)",
    date: "May 28, 2019",
    author: "Melissa McGinness",
    excerpt: "A kitchen table in chaos, a weekend in Avon, a first retreat with four feet of table space, and strangers who became lifelong friends.",
    image: undefined, // TODO: add /images/blog/we-did-it-part-3.jpg
    content: `
      <p>For a long time, I scrapbooked at my kitchen table. Organized chaos. Chris eventually suggested I get my own room — which was very diplomatic of him.</p>
      <p>He and I also had a habit of escaping to Avon for long weekends. I'd bring my supplies and set up at the dining table. It was good. But it wasn't the same as being with other people who were doing the same thing.</p>
      <h3>The first retreat</h3>
      <p>When I first heard about a home retreat, my biggest worry was sharing a room with a stranger. I'm a light sleeper and, let's say, physically affectionate at night. The host assured me each guest would have their own bed. I signed up.</p>
      <p>I overpacked. I had about four feet of table space. And it was one of the most inspiring weekends I'd had in years.</p>
      <h3>What changed</h3>
      <p>Being surrounded by women who shared my passion — who could talk about paper and adhesive and craft knives and memories for hours — changed something in how I thought about this. I found close friendships. I discovered new techniques, new brands, new possibilities through YouTube and Scrapbook Expo.</p>
      <p>I wrote this post from the event center at Outcrop Manor. Those early retreats are the reason this building exists.</p>
      <p>I want guests to find what I found: a place where strangers become lifelong friends and creativity gets celebrated without apology.</p>
      <p>More coming soon.</p>
      <p><em>— Melissa</em></p>
    `,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
