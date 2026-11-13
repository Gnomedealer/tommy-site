// All of the site's content lives here, so you can update text
// without touching the components.

export const profile = {
  name: "Tommy Nguyen",
  title: "Software Engineer",
  location: "Santa Clara, CA",
  tagline:
    "Full-stack developer with a background in finance and operations. I build clean, practical web apps with React and Ruby on Rails.",
  email: "sixty22tommy@gmail.com",
  github: "https://github.com/Gnomedealer",
  linkedin: "https://www.linkedin.com/in/tommy-nguyen-9a3b90122",
  resume: `${process.env.PUBLIC_URL}/Software%20Resume%20Career.pdf`,
};

export const about = [
  "I'm a Flatiron School software engineering graduate based in the Bay Area. Before writing code full-time, I spent years in finance, banking, and healthcare operations — keeping data accurate in Salesforce, SAP, Microsoft Dynamics, and Tableau.",
  "That work taught me how much good software matters to the people who use it every day. Now I build it: front ends in React, back ends in Rails and Node, and the SQL in between.",
];

export const skills = [
  { group: "Languages & Frameworks", items: ["JavaScript", "React", "Node.js", "Ruby", "Ruby on Rails", "HTML", "CSS"] },
  { group: "Data", items: ["SQL", "PostgreSQL", "SQLite", "Active Record", "REST APIs"] },
  { group: "Tools & Platforms", items: ["Git & GitHub", "Salesforce", "SAP", "Microsoft Dynamics", "Tableau", "SharePoint"] },
];

export const projects = [
  {
    name: "Slackcord",
    description:
      "A team chat app inspired by Slack and Discord. Rails back end with a JavaScript front end for channels and messaging.",
    tech: ["Ruby on Rails", "JavaScript", "SCSS"],
    repo: "https://github.com/Gnomedealer/slackcord",
  },
  {
    name: "Pokémon Searcher",
    description:
      "Search, browse, and add Pokémon. Cards flip to show each sprite's back, and new entries are saved to a REST API.",
    tech: ["React", "Hooks", "json-server"],
    repo: "https://github.com/Gnomedealer/react-hooks-practice-pokemon-searcher",
  },
  {
    name: "Michael Tracker",
    description:
      "A budget tracking app for logging expenses and keeping an eye on spending over time.",
    tech: ["React", "JavaScript", "CSS"],
    repo: "https://github.com/Gnomedealer/michaeltracker",
  },
];

export const experience = [
  {
    role: "Field Operations Administrator",
    company: "Cord Blood Registry",
    place: "Remote",
    dates: "Aug 2021 – Jun 2022",
    points: [
      "Processed kit orders and inventory transfers in Microsoft Dynamics AX 2012",
      "Maintained provider and facility records in Salesforce",
      "Validated data integrity with Tableau",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "Comerica Bank",
    place: "San Jose, CA",
    dates: "Jun 2020 – Jul 2021",
    points: [
      "Managed sales tracking and customer referrals in Salesforce",
      "Handled order and return processing with SAP Ariba",
    ],
  },
  {
    role: "Order Entry Clerk",
    company: "Sonoma State University Library",
    place: "Rohnert Park, CA",
    dates: "Aug 2015 – May 2020",
    points: [
      "Processed and tracked material orders and deliveries",
      "Managed data collection with SpringShare, a cloud SaaS platform",
    ],
  },
];

export const education = [
  { school: "Flatiron School", credential: "Certificate, Software Engineering", dates: "Oct 2022" },
  { school: "Sonoma State University", credential: "B.S. Business Administration (Finance)", dates: "May 2020" },
];

export const posts = [
  {
    title: "Getting back into code",
    summary: "Reviving my bootcamp projects on a modern toolchain — what broke and how I fixed it.",
    status: "Coming soon",
  },
  {
    title: "From finance to full-stack",
    summary: "What years of working with business data taught me about building software.",
    status: "Coming soon",
  },
];
