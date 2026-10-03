// ============================================================
// EDIT THIS FILE to update the whole website.
// Anything marked [PLACEHOLDER] must be replaced with real info.
// ============================================================
export const siteData = {
  org: {
    name: "Roy Youth Lacrosse", city: "Roy, Utah",
    tagline: "Come see why lacrosse is one of the fastest-growing sports for kids.",
    contactPerson: "[PLACEHOLDER] Coach Name",
    email: "[PLACEHOLDER] info@example.com", phone: "[PLACEHOLDER] (801) 555-0100",
    social: [{ label: "Instagram", url: "#" }, { label: "Facebook", url: "#" }],
  },
  nav: [["/", "Home"], ["/try-lacrosse", "Try Lacrosse"], ["/about-lacrosse", "About Lacrosse"], ["/for-parents", "For Parents"], ["/faq", "FAQ"], ["/contact", "Contact"]] as [string, string][],
  images: { hero: "" /* e.g. "/images/hero.jpg" (put file in public/images) */ },
  event: {
    name: "Try Lacrosse Night",
    date: "October 15, 2026",            // CHANGE DATE HERE (used everywhere + countdown)
    startTime: "6:00 PM", time: "6:00 – 8:15 PM",
    location: "[PLACEHOLDER] Field Name", address: "[PLACEHOLDER] Street Address, Roy, UT",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Roy+Utah",
    registrationUrl: "#",               // CHANGE REGISTRATION LINK HERE
    price: "Free",
    seasonInfo: "[PLACEHOLDER] Spring season; practices twice a week.",
  },
  announcements: [ // Add/remove lines. Empty list hides the banner.
    "Try Lacrosse Night is coming! No experience needed. Register today.",
  ],
  why: [
    { icon: "⚡", title: "Fast & Exciting", text: "Non-stop action with plenty of running, passing, and scoring." },
    { icon: "🤝", title: "Teamwork", text: "Every player matters. Kids learn to work together and lift each other up." },
    { icon: "🏡", title: "Great Community", text: "Join a friendly group of Roy-area kids, parents, and coaches." },
    { icon: "🌟", title: "Learn Something New", text: "Everyone starts at zero. Skills come fast and it's a blast." },
  ],
  ageGroups: [
    { name: "Little Hawks", ages: "Ages 5–7", note: "Fun, low-contact intro" },
    { name: "U10", ages: "Ages 8–10", note: "Learn the basics and play small games" },
    { name: "U12", ages: "Ages 11–12", note: "Build skills and team play" },
    { name: "U14", ages: "Ages 13–14", note: "Prep for high school lacrosse" },
  ],
  timeline: [
    { time: "6:00", title: "Check-in", text: "Sign in and meet the coaches." },
    { time: "6:15", title: "Introduction to Lacrosse", text: "A quick welcome and what we'll do tonight." },
    { time: "6:30", title: "Learn the Basics", text: "Holding, catching, and throwing." },
    { time: "7:00", title: "Try Lacrosse Drills", text: "Fun stations for every skill level." },
    { time: "7:30", title: "Scrimmage / Games", text: "Put it all together in small-sided games." },
    { time: "8:00", title: "Questions & Next Steps", text: "Ask us anything. Learn how to join the season." },
  ],
  toBring: ["Water bottle", "Athletic shoes or cleats", "Comfortable athletic clothes", "A positive attitude"],
  expect: ["Friendly coaches who teach from scratch", "All equipment provided", "Lots of playing, little standing around", "Parents welcome to watch"],
  whoShouldAttend: "Any kid in the Roy area interested in trying something new, and their parents. No experience needed.",
  about: {
    what: "Lacrosse is a fast-paced team sport played with a stick that has a small net on the end (a “crosse”) and a rubber ball. Players run, pass, and shoot to score in the other team's goal.",
    scoring: "Shoot the ball into the other team's goal to score one point. The team with the most points when time runs out wins.",
    rules: ["Players can't touch the ball with their hands (except the goalie).", "You pass and catch with your stick.", "Teams are ~10 players on the field at once (fewer for young ages).", "Safety rules protect players, and coaches enforce them."],
    positions: [
      { name: "Attack", text: "Score goals and set up teammates." },
      { name: "Midfield", text: "Run the whole field, on offense and defense." },
      { name: "Defense", text: "Stop the other team's shots and get the ball back." },
      { name: "Goalie", text: "Protect the goal. Great for kids who love a challenge." },
    ],
    doing: "In a game, players run up and down the field, pass the ball to teammates, and try to score. Think of it as a mix of soccer, basketball, and hockey.",
    compare: [
      { sport: "Soccer", text: "Same flow and field strategy, but with sticks instead of feet." },
      { sport: "Basketball", text: "Quick passing, picks, and team offense." },
      { sport: "Hockey", text: "Sticks, goals, and fast action, but on grass." },
    ],
    why: "Kids love the speed, the teamwork, and that everyone starts as a beginner.",
  },
  parents: {
    safety: "Lacrosse is a physical sport, and like all sports it carries some risk. Players wear protective gear, rules limit contact (especially at young ages), and trained coaches teach proper technique first. We start with fundamentals and build up gradually. [PLACEHOLDER] Add your league's specific safety policies.",
    equipmentRequired: ["Lacrosse stick", "Helmet with face mask", "Gloves", "Mouthguard", "Arm pads and shoulder pads (older ages)", "Cleats"],
    equipmentProvided: "[PLACEHOLDER] Sticks, helmets, and gloves will be available to borrow at Try Lacrosse Night.",
    costs: [{ item: "Try Lacrosse Night", price: "Free" }, { item: "Season registration", price: "[PLACEHOLDER] $___" }, { item: "Equipment (if buying)", price: "[PLACEHOLDER] $___–$___" }],
    wear: ["Athletic shorts or sweatpants", "T-shirt or athletic top", "Cleats or sturdy sneakers", "No jewelry"],
    after: ["Ask questions at the end of the night.", "Register for the season using the link on this site.", "Get the practice schedule and gear info.", "Start playing! [PLACEHOLDER] Add season dates."],
  },
  faq: [ // Add or remove questions here
    { q: "What ages can play?", a: "See the age groups on the home page. [PLACEHOLDER] Confirm ages." },
    { q: "Does my child need experience?", a: "No. Try Lacrosse Night is built for total beginners." },
    { q: "Is lacrosse safe?", a: "Players wear protective gear and coaches teach safe technique. See the For Parents page." },
    { q: "What equipment does my child need?", a: "Nothing for Try Lacrosse Night. We'll have gear available. Season equipment info is on the For Parents page." },
    { q: "How much does it cost?", a: "Try Lacrosse Night is free. [PLACEHOLDER] Season costs listed on the For Parents page." },
    { q: "What should my child bring?", a: "Water, athletic shoes, athletic clothes, and a good attitude." },
    { q: "Where are practices held?", a: "[PLACEHOLDER] Practice location." },
    { q: "How often are practices?", a: "[PLACEHOLDER] e.g., Two evenings a week." },
    { q: "When does the season start?", a: "[PLACEHOLDER] Season start date." },
    { q: "Can girls play?", a: "[PLACEHOLDER] Confirm girls' program details." },
    { q: "Can my child try lacrosse before registering?", a: "Yes! That's exactly what Try Lacrosse Night is for." },
    { q: "Who can I contact?", a: "Use the Contact page. We love questions." },
  ],
  seo: {
    description: "Roy, Utah youth lacrosse. Join Try Lacrosse Night, no experience needed. Ages, costs, equipment, and registration for Roy-area families.",
    keywords: ["Roy Utah youth lacrosse", "Roy lacrosse", "youth lacrosse near Roy Utah", "Utah youth lacrosse", "try lacrosse Roy Utah"],
  },
  // Future: coaches: [], sponsors: [], schedule: [], gallery: []
};
export type SiteData = typeof siteData;
