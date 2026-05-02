import type { ReactNode } from 'react';
import { HiMiniBeaker } from 'react-icons/hi2';
import { VscVscode } from 'react-icons/vsc';
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaWindows,
  FaHtml5,
  FaCss3Alt,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiAngular,
  SiRedux,
  SiPostman,
  SiGooglecloud,
  SiUbuntu,
  SiApple,
  SiFlask,
  SiFastapi,
  SiNestjs,
  SiKalilinux,
  SiPhp,
  SiFirebase,
  SiFlutter,
  SiJest,
  SiChartdotjs,
  SiPrimeng,
  SiShadcnui,
  SiSupabase,
} from 'react-icons/si';

export const profile = {
  name: 'Vaibhav Singh',
  username: 'Z3RO-O',
  location: 'India',
  avatar: '/avatar.svg',
  resume: '/Vaibhav_Singh_Resume.pdf',
  email: 'vvaibhavsingh.0@gmail.com',
};

export const socials = [
  { name: 'GitHub', url: 'https://github.com/Z3RO-O', icon: 'github' as const },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vvaibhavsingh',
    icon: 'linkedin' as const,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/vvaibhav_s',
    icon: 'instagram' as const,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/vaibhavsngh0',
    icon: 'twitter' as const,
  },
];

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  bio: 'Web Developer | CTF Player | Techie who wants to be an Ethical Hacker',
  philosophy: '" Computers can tell more about ourselves than what we can ! "',
};

export type TechStackItem = {
  name: string;
  icon: ReactNode;
  color: string;
};

type SkillCategory = 'frontend' | 'backend' | 'tools' | 'os';

type TechDefinition = TechStackItem & {
  /** If set, included on the skills globe under this group. Order in the array is preserved. */
  skillCategory?: SkillCategory;
  /** Extra keys that resolve to this entry (e.g. TailwindCSS → Tailwind CSS). */
  aliases?: readonly string[];
};

/**
 * Single source of truth for icons/colors. Drives `skills` (globe) and `techStackLookup` (projects/experience).
 */
const TECH_DEFINITIONS: TechDefinition[] = [
  // frontend (skills globe order)
  {
    name: 'React',
    icon: <FaReact />,
    color: '#61DAFB',
    skillCategory: 'frontend',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: '#fff',
    skillCategory: 'frontend',
  },
  {
    name: 'Angular',
    icon: <SiAngular />,
    color: '#DD0031',
    skillCategory: 'frontend',
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
    color: '#764ABC',
    skillCategory: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: '#3178C6',
    skillCategory: 'frontend',
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
    color: '#F7DF1E',
    skillCategory: 'frontend',
    aliases: ['JS'],
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: '#06B6D4',
    skillCategory: 'frontend',
    aliases: ['TailwindCSS'],
  },
  // backend
  {
    name: 'Django',
    icon: <SiDjango />,
    color: '#092E20',
    skillCategory: 'backend',
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi />,
    color: '#009688',
    skillCategory: 'backend',
  },
  {
    name: 'Flask',
    icon: <SiFlask />,
    color: '#fff',
    skillCategory: 'backend',
  },
  {
    name: 'NestJS',
    icon: <SiNestjs />,
    color: '#E0234E',
    skillCategory: 'backend',
  },
  {
    name: 'Express',
    icon: <SiExpress />,
    color: '#fff',
    skillCategory: 'backend',
  },
  // tools
  {
    name: 'GitHub',
    icon: <FaGithub />,
    color: '#fff',
    skillCategory: 'tools',
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    color: '#F05032',
    skillCategory: 'tools',
  },
  {
    name: 'VS Code',
    icon: <VscVscode />,
    color: '#007ACC',
    skillCategory: 'tools',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    color: '#2496ED',
    skillCategory: 'tools',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    color: '#FF6C37',
    skillCategory: 'tools',
  },
  {
    name: 'Google Cloud',
    icon: <SiGooglecloud />,
    color: '#4285F4',
    skillCategory: 'tools',
  },
  // os
  {
    name: 'Windows',
    icon: <FaWindows />,
    color: '#0078D6',
    skillCategory: 'os',
  },
  {
    name: 'macOS',
    icon: <SiApple />,
    color: '#999999',
    skillCategory: 'os',
  },
  {
    name: 'Kali Linux',
    icon: <SiKalilinux />,
    color: '#1788D2',
    skillCategory: 'os',
  },
  {
    name: 'Ubuntu',
    icon: <SiUbuntu />,
    color: '#E95420',
    skillCategory: 'os',
  },
  // projects / experience only (not on globe)
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
  { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#3FCF8E' },
  { name: 'PrimeNG', icon: <SiPrimeng />, color: '#DD0031' },
  {
    name: 'Playwright',
    icon: <HiMiniBeaker />,
    color: '#2EAD33',
  },
  { name: 'Jest', icon: <SiJest />, color: '#C21325' },
  {
    name: 'shadcn/ui',
    icon: <SiShadcnui />,
    color: '#fafafa',
  },
  {
    name: 'React-Charts',
    icon: <SiChartdotjs />,
    color: '#FF6384',
  },
  { name: 'Shell', icon: <FaTerminal />, color: '#fff' },
];

function toStackItem({ name, icon, color }: TechDefinition): TechStackItem {
  return { name, icon, color };
}

function buildSkillsByCategory(): {
  frontend: TechStackItem[];
  backend: TechStackItem[];
  tools: TechStackItem[];
  os: TechStackItem[];
} {
  const empty: {
    frontend: TechStackItem[];
    backend: TechStackItem[];
    tools: TechStackItem[];
    os: TechStackItem[];
  } = { frontend: [], backend: [], tools: [], os: [] };

  for (const def of TECH_DEFINITIONS) {
    if (!def.skillCategory) continue;
    empty[def.skillCategory].push(toStackItem(def));
  }
  return empty;
}

function buildTechStackLookup(): Record<string, TechStackItem> {
  const map: Record<string, TechStackItem> = {};
  for (const def of TECH_DEFINITIONS) {
    const item = toStackItem(def);
    map[def.name] = item;
    for (const alias of def.aliases ?? []) {
      map[alias] = item;
    }
  }
  return map;
}

/** Grouped for the skills globe; derived from `TECH_DEFINITIONS`. */
export const skills = buildSkillsByCategory();

/** Lookup by tech string in projects; includes aliases (e.g. `TailwindCSS`, `JS`). */
export const techStackLookup = buildTechStackLookup();

export function resolveTech(label: string): TechStackItem | null {
  return techStackLookup[label] ?? null;
}

export const experience = [
  {
    company: 'Sage',
    role: 'Associate Engineer',
    duration: 'Sep 2025 — Present',
    description:
      "Joined Sage as an Associate Engineer following Fyle's acquisition, continuing to contribute to frontend development and enhancing Sage Expense Management",
  },
  {
    company: 'Fyle',
    role: 'MTS 1',
    duration: 'Mar 2025 — Aug 2025',
    description:
      "Contributed to Fyle's product suite by developing and enhancing features across the Web app, Mobile app, Chrome extension, and Outlook add-in to improve user experience and streamline expense management workflows.",
  },
  {
    company: 'Fyle',
    role: 'Engineering Intern',
    duration: 'Aug 2024 — Feb 2025',
    description:
      'Implemented SSO NAA in the Outlook add-in, integrated NPS (via Refiner.io) in the web and mobile apps along with automation to calculate NPS for past 30 days, contributed usability fixes and user-facing improvements, and improved unit test coverage to ensure product reliability.',
  },
  {
    company: 'GEM AI',
    role: 'Junior Frontend Developer',
    duration: 'Mar 2024 — Aug 2024',
    description: 'Developed frontend features for AI-powered applications',
  },
  {
    company: 'CyberPeace Foundation',
    role: 'Research Intern',
    duration: 'Feb 2024 — Jun 2024',
    description:
      'Conducted research on cybersecurity initiatives and developed mobile applications',
  },
  {
    company: 'Blue Bricks',
    role: 'Frontend Developer Intern',
    duration: 'Oct 2023 — Dec 2023',
    description:
      'Developed responsive frontend interfaces and collaborated on web development projects',
  },
];

export const projects = [
  {
    title: 'Raaga',
    description:
      'Music streaming platform which uses Itunes API to fetch songs which provides 30 seconds previews in free tier.',
    image: '',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Z3RO-O/Raaga',
    live: 'https://raaga-lime.vercel.app',
  },
  {
    title: 'SMEAI',
    description:
      'Transforms your documents into an AI-powered subject matter expert.',
    image: '',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/Z3RO-O/SMEAI',
    live: 'https://smeai-alpha.vercel.app',
  },
  {
    title: 'Snake Game',
    description:
      'Classic Nokia Snake Game with relevant snake game sounds and a high score leaderboard using local storage.',
    image: '',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Z3RO-O/Snake-Game',
    live: 'https://snake-game-odyc.netlify.app',
  },
  {
    title: 'Git Alias',
    description:
      'A collection of powerful git aliases to boost your productivity and streamline your git workflow with installation script.',
    image: '',
    tech: ['Shell'],
    github: 'https://github.com/Z3RO-O/git-aliases',
    live: 'https://github.com/Z3RO-O/git-aliases',
  },
];

export const contactInfo = {
  heading: 'Get In Touch',
  description:
    "I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message!",
};
