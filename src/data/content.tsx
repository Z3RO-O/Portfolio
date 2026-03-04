import { VscVscode } from 'react-icons/vsc';
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaWindows,
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
} from 'react-icons/si';

export const profile = {
  name: 'Vaibhav Singh',
  username: 'Z3RO-O',
  title: 'Developer | CTF Player',
  description:
    'I craft modern, high-performance web experiences with clean code and creative UI. Passionate about open-source, developer tools, and pushing the boundaries of the web.',
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
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  bio: 'A Programmer | A Developer | A Techie who wants to be an Ethical Hacker',
  philosophy: '" Computers can tell more about ourselves than what we can ! "',
  highlights: [
    'Web developer',
    'Ethical hacking enthusiast',
    'Programmer on a mission to make the world a better place',
  ],
};

export const skills = {
  frontend: [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff' },
    { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  ],
  backend: [
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
    { name: 'Flask', icon: <SiFlask />, color: '#fff' },
    { name: 'NestJS', icon: <SiNestjs />, color: '#E0234E' },
    { name: 'Express', icon: <SiExpress />, color: '#fff' },
  ],
  tools: [
    { name: 'GitHub', icon: <FaGithub />, color: '#fff' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'VS Code', icon: <VscVscode />, color: '#007ACC' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
  ],
  os: [
    { name: 'Windows', icon: <FaWindows />, color: '#0078D6' },
    { name: 'macOS', icon: <SiApple />, color: '#999999' },
    { name: 'Kali Linux', icon: <SiKalilinux />, color: '#1788D2' },
    { name: 'Ubuntu', icon: <SiUbuntu />, color: '#E95420' },
  ],
};

export const experience = [
  {
    company: 'Sage',
    role: 'Associate Engineer',
    duration: 'Sep 2025 — Present',
    description:
      "Joined Sage as an Associate Engineer following Fyle's acquisition, continuing to contribute to frontend development and enhancing Sage Expense Management",
    tech: ['Frontend', 'Jest'],
  },
  {
    company: 'Fyle',
    role: 'MTS 1',
    duration: 'Mar 2025 — Aug 2025',
    description:
      "Contributed to Fyle's product suite by developing and enhancing features across the Web app, Mobile app, Chrome extension, and Outlook add-in to improve user experience and streamline expense management workflows.",
    tech: ['Git & Github', 'Frontend'],
  },
  {
    company: 'Fyle',
    role: 'Engineering Intern',
    duration: 'Aug 2024 — Feb 2025',
    description:
      'Implemented SSO NAA in the Outlook add-in, integrated NPS (via Refiner.io) in the web and mobile apps along with automation to calculate NPS for past 30 days, contributed usability fixes and user-facing improvements, and improved unit test coverage to ensure product reliability.',
    tech: ['Git & Github', 'Frontend'],
  },
  {
    company: 'GEM AI',
    role: 'Frontend Developer',
    duration: 'Mar 2024 — Aug 2024',
    description: 'Developed frontend features for AI-powered applications',
    tech: ['React.js', 'shadcn'],
  },
  {
    company: 'CyberPeace Foundation',
    role: 'Research Intern',
    duration: 'Feb 2024 — Jun 2024',
    description:
      'Conducted research on cybersecurity initiatives and developed mobile applications',
    tech: ['Flutter', 'Cloud Firestore'],
  },
  {
    company: 'Blue Bricks',
    role: 'Frontend Developer',
    duration: 'Oct 2023 — Dec 2023',
    description:
      'Developed responsive frontend interfaces and collaborated on web development projects',
    tech: ['Git & Github', 'Frontend'],
  },
];

export const projects = [
  {
    title: 'LSB Steganography',
    description:
      'This project aims to build a Website which can do steganography in all type of files.',
    image: '',
    tech: ['React', 'Tailwind CSS', 'Flask'],
    github: 'https://github.com/Z3RO-O/LSB-Steganography',
    live: 'https://github.com/Z3RO-O/LSB-Steganography',
  },
  {
    title: 'COOL-E',
    description:
      'This project is for Indian railways where you can Book a Coolie Online.',
    image: '',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Z3RO-O/E-COOLIE.git',
    live: 'https://cool-e.netlify.app/',
  },
  {
    title: 'ISDF Club Website',
    description:
      'Club Website for Information and Digital Forensics Club of AIT',
    image: '',
    tech: ['HTML', 'CSS', 'JS'],
    github:
      'https://github.com/Z3RO-O/ISDF-Websitehttps://github.com/Z3RO-O/ISDF-Website',
    live: 'https://z3ro-o.github.io/ISDF-Website/',
  },
  {
    title: 'Stock Market App',
    description:
      'This is a Stock Market Live Chart viewing website built in Bajaj HackRX 4.0 Hackathon',
    image: '',
    tech: ['React', 'TailwindCSS', 'React-Charts'],
    github: 'https://github.com/Z3RO-O/Stock-Charts',
    live: 'https://stock-charts.vercel.app/',
  },
  {
    title: 'Phishing Pages',
    description:
      ' The primary goal of this project is to provide a visual representation of how phishing attacks can be executed and to educate users on how to identify and protect themselves against such threats.',
    image: '',
    tech: ['PHP', 'CSS'],
    github: 'https://github.com/Z3RO-O/Phishing_page/tree/main',
    live: 'https://github.com/Z3RO-O/Phishing_page/tree/main',
  },
];

export const contactInfo = {
  heading: 'Get In Touch',
  description:
    "I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Drop me a message!",
};

export const contactConfig = {
  YOUR_EMAIL: 'vvaibhavsingh.0@gmail.com',
  YOUR_PHONE: '+91 7839271574',
  description:
    "If you have a project that you need help with, or if you just want to chat about hacking, I'd love to hear from you.",
  description2: 'You can reach me by email or by phone.',
  YOUR_SERVICE_ID: 'service_pklek2g',
  YOUR_TEMPLATE_ID: 'template_1q4071q',
  YOUR_USER_ID: '9IO0HwB_rw11nrq2B',
};
